import { database } from './firebase-config.js'; // Firebase 연결

const attendanceData = {
  겸손부: {
    brothers: ["이태섭", "김진우", "이동환", "문지훈", "박지웅", "김인수", "최재혁", "남준혁", "전도영", "김권비", "김두현", "전호성", "김민호", "박효원", "김지석"],
    sisters: ["전효진", "고다영", "남소연", "김유나", "정여진", "김민서", "김이안", "박지혜", "이현화", "심재경", "유지연", "김소은", "임도해", "심규리", "이소희", "심예림"]
  },
  온유부: {
    brothers: ["양인수", "김호진", "이상수", "정형기", "박수용", "공병인", "이동길", "정인교", "권세빈", "김용빈", "김승후", "홍정의", "김민성", "하현성", "김진우2", "전은섭(군)"],
    sisters: ["김유진", "이지희", "김민지", "임윤지", "박다은", "유재나", "김세연", "김채연", "임민해", "한예은", "임연주", "최연서", "한가은"]
  },
  사랑부: {
    brothers: ["신창현", "임우혁", "정용진", "강민구", "노현준", "양홍열", "김해원", "백진호", "김교식", "이신섭", "조시형", "임향원", "심어진", "오서준", "임주용", "김도건", "이준희(군)"],
    sisters: ["김혜련", "강민지", "최선영", "정희주", "박나은", "라유리", "하지원", "김호연", "유승비", "김주연", "강다빈", "이주화", "양정민", "한다빈", "유현지", "이다연"]
  }
};

function createAttendanceList() {
  const container = document.getElementById('attendanceContainer');

  for (const department in attendanceData) {
    const departmentData = attendanceData[department];
    
    // 부서명 추가
    const departmentTitle = document.createElement('h2');
    departmentTitle.textContent = `${department}`;
    container.appendChild(departmentTitle);
    
    // 형제 리스트 생성
    const brothersList = document.createElement('ul');
    departmentData.brothers.forEach(name => {
      const listItem = document.createElement('li');
      const button = document.createElement('button');
      button.classList.add('attendButton');
      button.textContent = name;
      button.setAttribute('data-name', name);
      getAttendanceStatus(name, button); // Firebase에서 출석 상태 가져오기
      listItem.appendChild(button);
      brothersList.appendChild(listItem);
    });
    container.appendChild(brothersList);
    
    // 자매 리스트 생성
    const sistersList = document.createElement('ul');
    departmentData.sisters.forEach(name => {
      const listItem = document.createElement('li');
      const button = document.createElement('button');
      button.classList.add('attendButton');
      button.textContent = name;
      button.setAttribute('data-name', name);
      getAttendanceStatus(name, button); // Firebase에서 출석 상태 가져오기
      listItem.appendChild(button);
      sistersList.appendChild(listItem);
    });
    container.appendChild(sistersList);
  }
}

// 출석 상태 가져오기 (Firebase)
function getAttendanceStatus(name, button) {
  const attendanceRef = database.ref('attendance/' + name);
  attendanceRef.on('value', (snapshot) => {
    const status = snapshot.val();
    if (status) {
      button.classList.add('disabled');
      button.textContent = `${name} (출석 완료)`;
    } else {
      button.classList.remove('disabled');
      button.textContent = name;
    }
  });
}

// 출석 버튼 토글 (Firebase 업데이트)
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('attendButton')) {
    const button = event.target;
    const name = button.getAttribute('data-name');
    const attendanceRef = database.ref('attendance/' + name);
    
    if (button.classList.contains('disabled')) {
      // 출석 취소
      attendanceRef.remove();
      button.classList.remove('disabled');
      button.textContent = name;
      alert(`${name}님의 출석이 취소되었습니다!`);
    } else {
      // 출석 기록
      attendanceRef.set(true);
      button.classList.add('disabled');
      button.textContent = `${name} (출석 완료)`;
      alert(`${name}님의 출석이 기록되었습니다!`);
    }
  }
});

// 페이지 로드 시 출석부 생성
createAttendanceList();
