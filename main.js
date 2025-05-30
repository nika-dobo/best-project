let content = document.querySelector("#input");
let button = document.querySelector("#Search");

button.addEventListener("click", function () {
  if (content.classList.contains("input-hidden")) {
    content.classList.remove("input-hidden");
    content.classList.add("input-view");
  } else {
    content.classList.remove("input-view");
    content.classList.add("input-hidden");
  }
});
