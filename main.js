const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0)
});

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}


let btn = document.querySelector("#btn");
window.onscroll = function() {
    if(scrollY >=1900)
    {
        btn.style.display = 'block';
    }else{
        btn.style.display = "none";
    }
}
btn.onclick = function(){
    scroll({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
}














