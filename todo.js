// Tasks list
 
let tasks = []

const lt = document.querySelector('.list');

function getUncompletedTasks(){
    let count = tasks.filter((task)=>task.status === true).length;
    document.querySelector(".uncompleted").textContent = `${count} items left`;
}

 
function addTask(value){

    // Get the task information from the event
    // Add the task to the list
    // Call render

    tasks.unshift({text: value, status: true});
    renderTasks();
    getUncompletedTasks();
}
 
const input = document.querySelector('.input');

input.addEventListener('keyup', (e) => {
    if(e.key === 'Enter'){
        addTask(input.value);
        input.value = ""
      
    }
});

//*render function*//

function renderTasks() {
    lt.innerHTML = "" ;
    
    tasks.forEach((item,index) => {
        let decoration="none"
        let isChecked = 'unchecked';
        if(item.status === false) {
            isChecked = 'checked';
        }
        if(item.status===false){
            decoration="line-through"
        }
        lt.innerHTML += `
        <li>
            <input class="checkbox" type="checkbox" data="${index}" id="task" ${isChecked}> 
            <label style="text-decoration: ${decoration};" class="tasks">${item.text}</label> 
            <button data="${index}" class="delete" id="close">x</button>
        </li>`;
    });
}

//delete

function deleteTask(index){
    tasks.splice(index,1)
    renderTasks();
    getUncompletedTasks();

    // Get the task information from the event
    // delete task to the list
    // Call render
}

lt.addEventListener('click', (e) => {
    let index = e.target.getAttribute('data');
    if(e.target.className === 'delete') {
        deleteTask(index)
    }
    // Checkbox

    else if(e.target.className === 'checkbox'){
        tasks[index].status = !(tasks[index].status);       
    }
    console.log(tasks);
    renderTasks()
});

    // strike_through

if (tasks.completed) {
    lt.classList.toggle('strike_through');
    getUncompletedTasks
}
    // Buttons
function showActive(){
    let temp = tasks;
    tasks = tasks.filter((item) => item.status === true);
    renderTasks();
    tasks = temp;
}
function showAll(){
    let temp = tasks;
    renderTasks();
    tasks = temp;
}

function showCompleted(){
    let temp = tasks;
    tasks = tasks.filter((item) => item.status === false);
    renderTasks();
    tasks = temp;
}
function showClearCompleted(){
    console.log("text");
    let temp = tasks;
    tasks = tasks.filter((item) => item.status); 
    renderTasks();
    tasks = temp;
}













