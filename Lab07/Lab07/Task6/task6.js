const tasks = [];

function addTask(task) {
  if (task === undefined || task.trim() === "") {
    console.log("Error: Cannot add an empty task.");
    return;
  }
  if (tasks.includes(task)) {
    console.log(`Error: "${task}" already exists in the list.`);
    return;
  }
  tasks.push(task);
  console.log(`Added: "${task}"`);
}

function markDone(index) {
  if (!Number.isInteger(index) || index < 0 || index >= tasks.length) {
    console.log("Error: Invalid index " + index);
    return;
  }
  if (!tasks[index].startsWith("[Done] ")) {
    tasks[index] = "[Done] " + tasks[index];
  }
  console.log("Marked done:", tasks[index]);
}

function updateTask(index, newText) {
  if (!Number.isInteger(index) || index < 0 || index >= tasks.length) {
    console.log("Error: Invalid index " + index);
    return;
  }
  tasks[index] = newText;
  console.log("Updated task " + index + " to:", newText);
}

function countPending() {
  let count = 0;
  for (const t of tasks) {
    if (!t.startsWith("[Done] ")) count++;
  }
  return count;
}

function clearTasks() {
  // tasks.length = 0 empties the SAME array object in place (no reassignment),
  // so it works with const. Reassigning (tasks = []) would throw a TypeError.
  tasks.length = 0;
  console.log("All tasks cleared.");
}

// ---- Testing ----
addTask("Buy groceries");
addTask("Finish ICT lab");
addTask("");                 // empty
addTask("Buy groceries");    // duplicate
addTask("Call mom");
addTask("Read chapter 5");
console.log(tasks);

markDone(1);
markDone(10);                // invalid
updateTask(2, "Call dad");
updateTask(-1, "Oops");      // invalid
console.log(tasks);

console.log("Pending tasks:", countPending());

clearTasks();
console.log(tasks, "Pending tasks:", countPending());
