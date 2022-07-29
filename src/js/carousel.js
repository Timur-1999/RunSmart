const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: true,
    navPosition: 'bottom',
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});
document.querySelector('.nav_dot1').addEventListener('click', function () {
    slider.goTo(0);
});
document.querySelector('.nav_dot2').addEventListener('click', function () {
    slider.goTo(1);
});
document.querySelector('.nav_dot3').addEventListener('click', function () {
    slider.goTo(2);
});