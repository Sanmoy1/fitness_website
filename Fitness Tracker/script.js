// Get the form element and workout log table
const form = document.querySelector('form');
const workoutLog = document.getElementById('workoutLog');

// Function to handle form submission
function addWorkout(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input values
  const exerciseName = document.getElementById('exerciseName').value;
  const sets = document.getElementById('sets').value;
  const reps = document.getElementById('reps').value;

  // Create a new row for the workout log table
  const newRow = workoutLog.insertRow();

  // Insert cells into the new row
  const exerciseCell = newRow.insertCell();
  const setsCell = newRow.insertCell();
  const repsCell = newRow.insertCell();

  // Set the cell values
  exerciseCell.textContent = exerciseName;
  setsCell.textContent = sets;
  repsCell.textContent = reps;

  // Clear the form inputs
  form.reset();
}

// Add an event listener to the form submit event
form.addEventListener('submit', addWorkout);
