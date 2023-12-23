let inputText = document.getElementById("TaskInput");
const button = document.querySelector(".addIcon");
let taskList = document.querySelector(".taskList");
let currentDay = document.querySelector(".currentDay");
let currentDate = document.querySelector(".currentDate");
let li, span;

// Create a new Date object
var Date = new Date();

// Get the current date
var day = Date.getDate();
var month = Date.getMonth() + 1; // Months are zero-indexed, so add 1
var year = Date.getFullYear();
var daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var dayOfWeekIndex = Date.getDay();
var dayOfWeek = daysOfWeek[dayOfWeekIndex];
currentDate.appendChild(
  document.createTextNode(day + "/" + month + "/" + year)
);
currentDay.appendChild(document.createTextNode(dayOfWeek));
console.log("Current Day:", dayOfWeek);

//function to add task
function addTask() {
  if (inputText.value == "") {
    alert("Add some task ");
  } else {
    li = document.createElement("li");
    li.classList.add("task");
    //creating a div
    div = document.createElement("div");
    div.classList.add("task-text");
    div.innerHTML=inputText.value;
    li.appendChild(div);
    //Creating a span 
    span = document.createElement("span");
    span.classList.add("cross");
    span.innerHTML = "&#10006;"; // Unicode character for "X"
    li.appendChild(span);
    taskList.appendChild(li);
    // console.log(li);
    inputText.value = "";
  }
}
//New task is added when clicked on plus icon
button.addEventListener("click", addTask);
inputText.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    addTask();
  }
});

// Event listener for the dynamically created li elements

taskList.addEventListener("click", function (event) {
  const clickedElement = event.target;
  console.log(clickedElement);
  // Toggle the "checked" class on the clicked li element
 

  if(clickedElement.classList.contains("task-text")){
    clickedElement.parentNode.classList.toggle("checked");
  }else{
    clickedElement.classList.toggle("checked");
  }

  if (clickedElement.tagName === "SPAN") {
    // Remove the parent li when the delete button is clicked
    const liToRemove = clickedElement.parentNode;
    liToRemove.remove();
  }
});


