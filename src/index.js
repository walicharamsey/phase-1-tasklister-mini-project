document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting the traditional way

      // Your code to add the task to the list goes here
  });
  // Inside the submit event listener
const inputField = document.getElementById("new-task-description");
const taskText = inputField.value;

// Check if the input is not empty
if (taskText) {
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Optionally, you can add a delete button to each task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        taskItem.remove(); // Delete the task when the button is clicked
    });
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
    inputField.value = ""; // Clear the input field
}


  // Your code for displaying existing tasks or additional features goes here
});
const priorityDropdown = document.createElement("select");
priorityDropdown.innerHTML = `
    <option value="low">Low</option>
    <option value="medium">Medium</option>
    <option value="high">High</option>
`;

// Add an event listener to set the task priority
priorityDropdown.addEventListener("change", function() {
    const selectedPriority = priorityDropdown.value;
    taskItem.classList = selectedPriority; // Apply a CSS class based on priority
});

taskItem.appendChild(priorityDropdown);


