let active = 0;
let images = document.querySelectorAll('.product-img');
let less = document.querySelector('#less');
let more = document.querySelector('#more');
let clicked = false;

less.addEventListener('click', () => {
    images[active].classList.remove('active');
    if (active - 1 == -1)
        active = images.length - 1;
    else
        active--;
    images[active].classList.add('active');
});

more.addEventListener('click', () => {
    images[active].classList.remove('active');
    if (active + 1 == images.length)
        active = 0;
    else
        active++;
    images[active].classList.add('active');
});

setInterval(() => {
    images[active].classList.remove('active');
    if (active + 1 == images.length)
        active = 0;
    else
        active++;
    images[active].classList.add('active');
}, 3000);