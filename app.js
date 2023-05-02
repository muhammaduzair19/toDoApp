const input = document.getElementById('input');
const addBtn = document.getElementById('add');
const ul = document.querySelector('.list-container');


function addTask() {
    if (input.value === '') {
        alert('Write some tasks to add')
    }
    else {
        const li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = input.value;
        const span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    input.value = '';
    saveData();
    

}

// function addTask(){
//     const ul = document.querySelector('.list-container');
//     ul.innerHTML = `<li>${input.value}</li>`
//     input.value = '';
// }

ul.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();

    }
    
}, false);

function saveData(){
    localStorage.setItem("toDoTask",ul.innerHTML);
}

function getData(){
    ul.innerHTML = localStorage.getItem("toDoTask")
}

getData();