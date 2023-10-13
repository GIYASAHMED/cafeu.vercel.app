// onscroll navbar fixed 
window.addEventListener("scroll", function () {
    let navbar_wrapper = document.querySelector('.wrapper')
    navbar_wrapper.classList.toggle("sticky", window.scrollY > 0)
})