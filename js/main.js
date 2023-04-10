window.addEventListener('scroll', function() {
    if (window.scrollY > 80) {
        header_bar.classList.add('scrolling-active');
    } else {
        header_bar.classList.remove('scrolling-active');}
});