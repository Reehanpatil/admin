let box = document.getElementsByClassName("box");
let items = document.getElementsByClassName("items");

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", () => {
    for (let j = 0; j < items.length; j++) {
      box[j].classList.remove("active");
    }
    box[i].classList.add("active");
  });
}

let new_page = document.getElementsByClassName("new-one");
let pop = document.querySelector(".pop");
let close_btn = document.getElementById("close-icon");

close_btn.addEventListener("click", () => {
  pop.classList.remove("active");
});

for (let i = 0; i < new_page.length; i++) {
  new_page[i].addEventListener("click", () => {
    pop.classList.add("active");
  });
}
