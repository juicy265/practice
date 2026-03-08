const recommendBtn = document.getElementById('recommend-btn');
const menuDisplay = document.getElementById('menu-display');
const imageContainer = document.getElementById('image-container');
const menuImage = document.getElementById('menu-image');

const menuItems = [
    { name: "된장찌개", image: "https://images.unsplash.com/photo-1620029517173-2f0f46c3ec99?q=80&w=800&auto=format&fit=crop" },
    { name: "김치찌개", image: "https://images.unsplash.com/photo-1616669944447-d65609146fbe?q=80&w=800&auto=format&fit=crop" },
    { name: "비빔밥", image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=800&auto=format&fit=crop" },
    { name: "돈까스", image: "https://images.unsplash.com/photo-1623945359670-4f51952e987c?q=80&w=800&auto=format&fit=crop" },
    { name: "제육볶음", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=800&auto=format&fit=crop" },
    { name: "초밥", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800&auto=format&fit=crop" },
    { name: "파스타", image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=800&auto=format&fit=crop" },
    { name: "피자", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop" },
    { name: "햄버거", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop" },
];

recommendBtn.addEventListener('click', () => {
    // 버튼 비활성화 (연타 방지)
    recommendBtn.disabled = true;
    
    // 이미지 컨테이너 숨기기
    imageContainer.classList.add('hidden');
    menuDisplay.textContent = "추천 중...";

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * menuItems.length);
        const selected = menuItems[randomIndex];
        
        menuDisplay.textContent = `오늘의 추천은 "${selected.name}" 입니다!`;
        menuImage.src = selected.image;
        menuImage.alt = selected.name;
        
        // 이미지 로드 완료 후 표시
        menuImage.onload = () => {
            imageContainer.classList.remove('hidden');
            recommendBtn.disabled = false;
        };
    }, 500);
});
