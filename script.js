document.addEventListener('DOMContentLoaded', () => {
  // 겸손부 형제 이름 배열
  const gyeomsonBrothers = [
      '이태섭', '김진우', '이동환', '문지훈', '박지웅', '김인수', '최재혁', '남준혁', '전도영', '김권비', '김두현', '전호성', '김민호', '박효원', '김지석'
  ];
  // 겸손부 자매 이름 배열
  const gyeomsonSisters = [
      '전효진', '고다영', '남소연', '김유나', '정여진', '김민서', '김이안', '박지혜', '이현화', '심재경', '유지연', '김소은', '임도해', '심규리', '이소희', '심예림'
  ];

  // 온유부 형제 이름 배열
  const onyuBrothers = [
      '양인수', '김호진', '이상수', '정형기', '박수용', '공병인', '이동길', '정인교', '권세빈', '김용빈', '김승후', '홍정의', '김민성', '하현성', '김진우2', '전은섭(군)'
  ];
  // 온유부 자매 이름 배열
  const onyuSisters = [
      '김유진', '이지희', '김민지', '임윤지', '박다은', '유재나', '김세연', '김채연', '임민해', '한예은', '임연주', '최연서', '한가은'
  ];

  // 사랑부 형제 이름 배열
  const salangBrothers = [
      '신창현', '임우혁', '정용진', '강민구', '노현준', '양홍열', '김해원', '백진호', '김교식', '이신섭', '조시형', '임향원', '심어진', '오서준', '임주용', '김도건', '이준희(군)'
  ];
  // 사랑부 자매 이름 배열
  const salangSisters = [
      '김혜련', '강민지', '최선영', '정희주', '박나은', '라유리', '하지원', '김호연', '유승비', '김주연', '강다빈', '이주화', '양정민', '한다빈', '유현지', '이다연'
  ];

  // 각 부서별로 버튼 생성 함수
  function createAttendanceButtons(brothers, sisters, containerId) {
      const container = document.getElementById(containerId);
      
      brothers.forEach(name => {
          const button = document.createElement('button');
          button.textContent = name + ' (형제)';
          container.appendChild(button);

          button.addEventListener('click', () => {
              alert(`${name}님의 출석이 기록되었습니다!`);
          });
      });

      sisters.forEach(name => {
          const button = document.createElement('button');
          button.textContent = name + ' (자매)';
          container.appendChild(button);

          button.addEventListener('click', () => {
              alert(`${name}님의 출석이 기록되었습니다!`);
          });
      });
  }

  // 각 부서별 출석부 버튼 생성
  createAttendanceButtons(gyeomsonBrothers, gyeomsonSisters, 'attendanceContainerGyeomson');
  createAttendanceButtons(onyuBrothers, onyuSisters, 'attendanceContainerOnyu');
  createAttendanceButtons(salangBrothers, salangSisters, 'attendanceContainerSalang');
});
