/*============= typing animation =============*/

var typed = new Typed(".typing",{
	strings:["Web Designer","Web Developer",],
	typeSpeed:100,
	BackSpeed:60,
	loop:true
});

const activeClass = document.querySelectorAll(".nav li a");
const asideClass = document.querySelector(".aside");

activeClass.forEach((item)=> {
	item.addEventListener("click",() => {
		const elems = document.querySelector(".active");
	    if(elems) {
	      elems.classList.remove("active");
	    }
		item.classList.add("active");
	});
})

const navClass = document.getElementsByTagName('nav')[0];
const asideClose = document.querySelector(".nav_close");

navClass.addEventListener("click",() => {
  asideClass.style.display = "flex";
  	window.addEventListener("scroll", () => {
		aside.style.display = "none";
	});	
});

asideClose.addEventListener("click",() => {
  asideClass.style.display = "none";

});
