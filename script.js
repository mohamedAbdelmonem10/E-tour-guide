let span = document.querySelector(".up");

window.onscroll = function() {
    if (this.scrollY >= 1) {
        span.classList.add("show");

    } else {
        span.classList.remove("show");
    }
};
span.onclick = function (){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
};
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('you have send your message successfully!');
});
