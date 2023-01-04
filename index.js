const searchbarEl = document.querySelector('.searchbar-container');
const magnifierBtn = document.querySelector('.img-magnifier');

magnifierBtn.addEventListener('click', () => {
    searchbarEl.classList.toggle('active');
});