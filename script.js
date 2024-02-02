var inputBox = document.querySelector("#input-box");
var listContainer = document.querySelector("#list");

function addTask(elem) {
  if (inputBox.value === "") {
    alert("Kuch to likho!!!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (elem) {
    console.log(elem.target);
    if (elem.target.tagName === "LI") {
      elem.target.classList.toggle("checked");
      saveData();
      console.log(elem.target.parentElement);
    } else if (elem.target.tagName === "SPAN") {
      elem.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
