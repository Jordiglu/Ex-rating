const container = document.querySelector('.rating');
const items = container.querySelectorAll('.rating-item');


container.onclick = event => {
    const elClass = event.target.classList;
    if (!elClass.contains('active')) {
        items.forEach(item => item.classList.remove('active'));
        console.log(event.target.getAttribute("data-rate"));
        elClass.add('active');
        container.style.color = "yellow";
    }
};