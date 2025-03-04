// date 

let today = new Date();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

let formattedDate = `${days[today.getDay()]}, ${months[today.getMonth()]} ${today.getDate()} ${today.getFullYear()}`;

document.getElementById("date-display").textContent = formattedDate;

// time

let formattedTime = today.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
});


// Complete button handling
const completedTasks = document.getElementsByClassName("task-completed");

const completedHeader = document.getElementsByClassName("header-completed");

let numofTasks = document.getElementById("task-assigned").innerText;
let taskAssigned = parseInt(numofTasks);

let numofCompletedTasks = document.getElementById("num-of-completed-tasks").innerText;
let totalTask = parseInt(numofCompletedTasks);

const messages = document.getElementById('task-complete-msg');

for (let i = 0; i < completedTasks.length; i++) {
    completedTasks[i].addEventListener('click', function() {
        taskAssigned--;
        totalTask++;
        alert("Board updated successfully");
        if (taskAssigned === 0) {
            alert("congrates!!! You have completed all the current task");
        }
        this.disabled = true;
        document.getElementById("task-assigned").innerText = taskAssigned;
        document.getElementById("num-of-completed-tasks").innerText = totalTask;
        const msg = document.createElement('li');
        msg.classList.add('bg-bodybg', 'rounded-xl', 'p-4', 'mt-2');
        msg.innerText += "You have Complete The Task " + completedHeader[i].innerText + " " + "at " + formattedTime;
        messages.appendChild(msg);
    });
}

// clear history
document.getElementById('clear-history')
    .addEventListener("click", function() {
        messages.innerHTML = "";
    });

// background change
document.getElementById("theme-btn").addEventListener("click", function() {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});