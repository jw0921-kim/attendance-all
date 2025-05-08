document.addEventListener('DOMContentLoaded', () => {
    const gyeomsonBrothers = ['이태섭','김진우','이동환','문지훈','박지웅','김인수','최재혁','남준혁','전도영','김권비','김두현','전호성','김민호','박효원','김지석'];
    const gyeomsonSisters = ['전효진','고다영','남소연','김유나','정여진','김민서','김이안','박지혜','이현화','심재경','유지연','김소은','임도해','심규리','이소희','심예림'];
    const onyuBrothers = ['양인수','김호진','이상수','정형기','박수용','공병인','이동길','정인교','권세빈','김용빈','김승후','홍정의','김민성','하현성','김진우2','전은섭(군)'];
    const onyuSisters = ['김유진','이지희','김민지','임윤지','박다은','유재나','김세연','김채연','임민해','한예은','임연주','최연서','한가은'];
    const salangBrothers = ['신창현','임우혁','정용진','강민구','노현준','양홍열','김해원','백진호','김교식','이신섭','조시형','임향원','심어진','오서준','임주용','김도건','이준희(군)'];
    const salangSisters = ['김혜련','강민지','최선영','정희주','박나은','라유리','하지원','김호연','유승비','김주연','강다빈','이주화','양정민','한다빈','유현지','이다연'];

    function createSection(title, names) {
        const section = document.createElement('div');
        section.classList.add('section');
        const heading = document.createElement('h3');
        heading.textContent = title;
        section.appendChild(heading);
        names.forEach(name => {
            const btn = document.createElement('button');
            btn.textContent = name;
            btn.addEventListener('click', () => {
                btn.classList.toggle('checked');
            });
            section.appendChild(btn);
        });
        return section;
    }

    function hideAllContainers() {
        document.getElementById('attendanceContainerGyeomson').style.display = 'none';
        document.getElementById('attendanceContainerOnyu').style.display = 'none';
        document.getElementById('attendanceContainerSalang').style.display = 'none';
    }

    function showAttendance(containerId, brothers, sisters) {
        hideAllContainers(); // ✅ 다른 부서 숨기기
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        container.appendChild(createSection('형제', brothers));
        container.appendChild(createSection('자매', sisters));
        container.style.display = 'flex';
    }

    document.getElementById('gyeomsonBtn').addEventListener('click', () => {
        showAttendance('attendanceContainerGyeomson', gyeomsonBrothers, gyeomsonSisters);
    });
    document.getElementById('onyuBtn').addEventListener('click', () => {
        showAttendance('attendanceContainerOnyu', onyuBrothers, onyuSisters);
    });
    document.getElementById('salangBtn').addEventListener('click', () => {
        showAttendance('attendanceContainerSalang', salangBrothers, salangSisters);
    });
});
