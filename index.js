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

class CheckTask {
  constructor (task, score) {
  this.task = task;
  this.score = score;
  }
  sumScore() {
    let sum = 0
    for (let i = 0; i < this.score.length; i++) {
      sum += this.score[i];
    }
    console.log(`-----------Total score = ${sum}------------`);
  }
  printScore(){
    for (let i = 0; i < this.score.length; i++) {
      console.log(`${this.task[i]} --> ${this.score[i]}`);
    }
  }
}
let task = [
  `validator.w3.org -> No errors or warnings to show (+10)`,
  `Semantic layout teg and h1-h6 (max 20)`,
  `CSS styles (+10)`,
  `Content block (+10)`,
  `Adaptive (+10)`,
  `Menu (+10)`,
  `Photo and avatar and attribute "alt" (+10)`,
  `Contacts and skills (+10)`,
  `Contacts and skills in ul > li (+10)`,
  `Example code with highlight (+10)`,
  `Projects list (+10)`,
  `CV in English (+10)`,
  `GitHab Pull Request (+10)`,
  `Video CV (+10)`,
  `Design (+10)`,
];
let score = [10, 20, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 10]
let checkTaskCV = new CheckTask(task, score);
checkTaskCV.printScore();
checkTaskCV.sumScore();






