const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', () => {

        const currentTop = document.querySelector('.project-card[data-top="true"]');

        if (currentTop) {
            currentTop.removeAttribute('data-top');
        }

        card.setAttribute('data-top', 'true');

        const cards = [...projectCards];

        const clickedIndex = cards.indexOf(card);

        cards.forEach((card, index) => {
            card.style.zIndex =
                (clickedIndex - index + cards.length) % cards.length;
        });
    });
});