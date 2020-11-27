// header slider
let active = 0;
let images = document.querySelectorAll('.product-img');
let less = document.querySelector('#less');
let more = document.querySelector('#more');

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

// sound on link clicks
let navigationLinks = document.querySelectorAll('.navigation-link');
let personalLinks = document.querySelectorAll('.personal-link');
let h3LinksUp = document.querySelectorAll('.h3-link-up');
let h3LinksDown = document.querySelectorAll('.h3-link-down')
let arrowsLeft = document.querySelectorAll('.arrow-left');
let arrowsRight = document.querySelectorAll('.arrow-right');
let footerLinks = document.querySelectorAll('.footer-link');
let allLinks = [...navigationLinks, ...personalLinks, ...h3LinksUp, ...h3LinksDown, ...arrowsLeft, ...arrowsRight, ...footerLinks];
let audio = document.querySelector('#audio');

for (let link of allLinks) {
    link.addEventListener('click', () => {
        audio.play();
    });
}

// add to cart / display product amount in the cart / add pop up cart

localStorage.setItem('totalAmount', '0'); // set to zero when page reloads

let addToCart = document.querySelectorAll('.add-to-cart');
let cartAmount = document.querySelector('#cart-amount');
let totalAmount = 0;
let soloAmount = 0;
let popUp = document.querySelectorAll('.pop-up');
let scrollCartAmount = document.querySelector('#scroll-cart-amount');
let scrollCart = document.querySelector('#scroll-cart');
for (let add of addToCart) {
    add.addEventListener('click', () => {
        // total amount / top of page
        totalAmount++;
        cartAmount.innerHTML = totalAmount;
        localStorage.setItem('totalAmount', totalAmount);
        scrollCartAmount.innerHTML = localStorage.getItem('totalAmount'); // working version :)

        // solo amount / each product
        let child = add.children[1];
        child.classList.add('cart-amount-pop-up');
        if (child.innerHTML === '')
            soloAmount = 1;
        else {
            soloAmount = child.innerHTML;
            soloAmount++;
        }
        child.innerHTML = soloAmount;
    });
}

// show cart on scroll
window.addEventListener("scroll", () => {
    let y = window.scrollY;
    scrollCartAmount.innerHTML = localStorage.getItem('totalAmount');
    if (y >= 100) {
        scrollCartAmount.classList.add('scroll-cart-amount');
        scrollCart.classList.add('lnr');
        scrollCart.classList.add('lnr-cart');
        scrollCart.classList.add('scroll-cart');

    } else {
        scrollCartAmount.classList.remove('scroll-cart-amount');
        scrollCart.classList.remove('lnr');
        scrollCart.classList.remove('lnr-cart');
        scrollCart.classList.remove('scroll-cart');
        scrollCartAmount.innerHTML = '';
    }
});