// init 3 const variable for input textfield, list-container for the output, and button.

const inputBox = document.querySelector("#input-box");
const outputList = document.querySelector("#list-container");
const btnAdd = document.querySelector("#btnAdd");

// to call the onclick function for it to trigger the addTask function.
btnAdd.onclick = addTask;

// this will trigger the adding task and displaying it to the list container
function addTask() {
  // checking first if no value or only spaces was inputted by the user if so, there will be an alert warning.
  if (inputBox.value === "" || inputBox.value === " ") {
    alert("You must write something");
  } else {
    // else will create and element li, then will init the li var (container for the created li) for the value of inputBox.value then will appendChild or added to the outputList or the list - container
    // for span same with li only difference is that the value will be &#9447 unicode for (X) circle X, then app
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    outputList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "&#9447";
    li.appendChild(span);
  }
  inputBox.value = ""; // after adding the input by the user, it will clear the input textfield.
  saveData(); // saveData will be called to save the list of Task
}

// to add an event click for the list-container
outputList.addEventListener(
  "click",
  function (e) {
    // if the LI tag was click then it will run the code inside, it is also toggle for on/off of the checked ID for img. else if the span was click then it will remove the parentElement in this case the LI
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData(); // saveData will be called to save the list of Task
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData(); // saveData will be called to save the list of Task
    }
  },
  false
);

// to save the list of task inside the browser storage by using the localStorage.setItem
function saveData() {
  localStorage.setItem("listTask", outputList.innerHTML);
}

// to show the list of task inside the browser storage by using the localStorage.getItem
function showList() {
  outputList.innerHTML = localStorage.getItem("listTask");
}
showList();
