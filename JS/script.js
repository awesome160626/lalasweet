document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.Main_slideB .slide img');
    const buttons = document.querySelectorAll('.Main_slideB .btn');
    let currentSlide = 0;

    // 첫 번째 슬라이드 보이기
    slides[currentSlide].classList.add('active');
    buttons[currentSlide].classList.add('active');

    // 버튼 클릭 이벤트 설정
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // 현재 활성화된 슬라이드 및 버튼 비활성화
            slides[currentSlide].classList.remove('active');
            buttons[currentSlide].classList.remove('active');

            // 클릭한 버튼과 해당하는 슬라이드 활성화
            currentSlide = index;
            slides[currentSlide].classList.add('active');
            buttons[currentSlide].classList.add('active');
        });
    });

    // 자동 슬라이드
    setInterval(() => {
        // 현재 활성화된 슬라이드 및 버튼 비활성화
        slides[currentSlide].classList.remove('active');
        buttons[currentSlide].classList.remove('active');

        // 다음 슬라이드로 이동
        currentSlide = (currentSlide + 1) % slides.length;

        // 다음 슬라이드와 해당하는 버튼 활성화
        slides[currentSlide].classList.add('active');
        buttons[currentSlide].classList.add('active');
    }, 5000); // 5초마다 슬라이드 변경

    // 버튼 색상을 그린으로 변경
    buttons.forEach((button) => {
        button.style.backgroundColor = "#648536";
    });
    
    // 버튼 호버시 주황색으로 변경
    buttons.forEach((button) => {
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = "#F7C04C";
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = "#648536";
        });
    });
});
