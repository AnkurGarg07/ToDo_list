let inputText = document.getElementById("TaskInput");
const button = document.querySelector(".addIcon");
let taskList = document.querySelector(".taskList");
let currentDay = document.querySelector(".currentDay");
let currentDate = document.querySelector(".currentDate");
let li,span;

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
function addTask(){
    li = document.createElement("li");
    li.classList.add("task");
    li.innerHTML = inputText.value;

    span = document.createElement("span");
    span.innerHTML = "&#10006;"; // Unicode character for "X"
    li.appendChild(span);
    taskList.appendChild(li);
    inputText.value = "";
}
//New task is added when clicked on plus icon
button.addEventListener('click',addTask);
inputText.addEventListener("keyup",function(e){
    if(e.key=='Enter'){
        addTask();
    }
})

  // Event listener for the dynamically created li elements
  taskList.addEventListener("click", function (event) {
    const clickedElement = event.target;

    if (clickedElement.classList.contains("task")) {
      // Toggle the "checked" class on the clicked li element
      clickedElement.classList.toggle("checked");
    }

    if (clickedElement.tagName === "SPAN") {
      // Remove the parent li when the delete button is clicked
      const liToRemove = clickedElement.parentNode;
      liToRemove.remove();
    }
  });
