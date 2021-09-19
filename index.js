let menu = document.querySelector(".menu")
let ham = document.querySelector(".ham")
let xIcon = document.querySelector(".xIcon")
let menuIcon = document.querySelector(".menuIcon")
let photo = document.querySelector(".photo")

xIcon.style.display = "none"

ham.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
    photo.style.display = "block";
    
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
    photo.style.display = "none";
  }
}

let menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
  }
)


console.log(xIcon.style);

