document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript가 정상적으로 실행되었습니다!'); // 디버깅 메시지 추가

  // 겸손부 형제, 자매 이름 배열
  const gyeomsonBrothers = [
      '이태섭', '김진우', '이동환', '문지훈', '박지웅', '김인수', '최재혁', '남준혁', '전도영', '김권비', '김두현', '전호성', '김민호', '박효원', '김지석'
  ];
  const gyeomsonSisters = [
      '전효진', '고다영', '남소연', '김유나', '정여진', '김민서', '김이안', '박지혜', '이현화', '심재경', '유지연', '김소은', '임도해', '심규리', '이소희', '심예림'
  ];

  // 온유부 형제, 자매 이름 배열
  const onyuBrothers = [
      '양인수', '김호진', '이상수', '정형기', '박수용', '공병인', '이동길', '정인교', '권세빈', '김용빈', '김승후', '홍정의', '김민성', '하현성', '김진우2', '전은섭(군)'
  ];
  const onyuSisters = [
      '김유진', '이지희', '김민지', '임윤지', '박다은', '유재나', '김세연', '김채연', '임민해', '한예은', '임연주', '최연서', '한가은'
  ];

  // 사랑부 형제, 자매 이름 배열
  const salangBrothers = [
      '신창현', '임우혁', '정용진', '강민구', '노현준', '양홍열', '김해원', '백진호', '김교식', '이신섭', '조시형', '임향원', '심어진', '오서준', '임주용', '김도건', '이준희(군)'
  ];
  const salangSisters = [
      '김혜련', '강민지', '최선영', '정희주', '박나은', '라유리', '하지원', '김호연', '유승비', '김주연', '강다빈', '이주화', '양정민', '한다빈', '유현지', '이다연'
  ];

  // 이름을 버튼으로 생성하는 함수 (형제/자매 구분)
  function createAttendanceButtons(brothers, sisters, containerId) {
      const container = document.getElementById(containerId);
      container.innerHTML = '';  // 기존 내용을 비운 후에 새롭게 추가

      const brothersSection = document.createElement('div');
      brothersSection.innerHTML = '<h3>형제</h3>';
      brothers.forEach(name => {
          const button = document.createElement('button');
          button.textContent = name;
          brothersSection.appendChild(button);
          button.addEventListener('click', () => {
              alert(`${name}님의 출석이 기록되었습니다!`);
          });
      });

      const sistersSection = document.createElement('div');
      sistersSection.innerHTML = '<h3>자매</h3>';
      sisters.forEach(name => {
          const button = document.createElement('button');
          button.textContent = name;
          sistersSection.appendChild(button);
          button.addEventListener('click', () => {
              alert(`${name}님의 출석이 기록되었습니다!`);
          });
      });

      container.appendChild(brothersSection);
      container.appendChild(sistersSection);
  }

  // 각 부서 버튼 클릭 시 해당 부서의 출석부를 보이기
  document.getElementById('gyeomsonBtn').addEventListener('click', () => {
      const container = document.getElementById('attendanceContainerGyeomson');
      const isVisible = container.style.display === 'block';
      container.style.display = isVisible ? 'none' : 'block'; // 토글로 보이기/숨기기
      if (!isVisible) {
          createAttendanceButtons(gyeomsonBrothers, gyeomsonSisters, 'attendanceContainerGyeomson');
      }
  });

  document.getElementById('onyuBtn').addEventListener('click', () => {
      const container = document.getElementById('attendanceContainerOnyu');
      const isVisible = container.style.display === 'block';
      container.style.display = isVisible ? 'none' : 'block'; // 토글로 보이기/숨기기
      if (!isVisible) {
          createAttendanceButtons(onyuBrothers, onyuSisters, 'attendanceContainerOnyu');
      }
  });

  document.getElementById('salangBtn').addEventListener('click', () => {
      const container = document.getElementById('attendanceContainerSalang');
      const isVisible = container.style.display === 'block';
      container.style.display = isVisible ? 'none' : 'block'; // 토글로 보이기/숨기기
      if (!isVisible) {
          createAttendanceButtons(salangBrothers, salangSisters, 'attendanceContainerSalang');
      }
  });
});
