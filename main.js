const recommendBtn = document.getElementById('recommend-btn');
const menuDisplay = document.getElementById('menu-display');

const menuItems = [
    "된장찌개",
    "김치찌개",
    "비빔밥",
    "돈까스",
    "제육볶음",
    "초밥",
    "파스타",
    "피자",
    "햄버거",
];

recommendBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * menuItems.length);
    const selectedMenu = menuItems[randomIndex];
    menuDisplay.textContent = `오늘의 추천 메뉴는?! "${selectedMenu}" 입니다!`;
});
