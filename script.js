// variable of tag form to input task
const inputtas = document.querySelector('.taskinput');
// variable of ul
const list = document.querySelector('.tasklist');
// variable of remove all button
const remove = document.querySelector('.removetask');
// variable of input tag
const taskin = document.querySelector('.text');
// variable of check-time
let check = document.querySelector('.check-time');
// variable of tag form to input date
const formDa = document.querySelector('.formdate');

let taskdate =false;

// function to read the value of input
readtask();
 
function readtask(){
    inputtas.addEventListener('submit', addtask);
    check.addEventListener('change', checkTime);
    remove.addEventListener('click', removeAll);
}

//fuction will remove all the task

function removeAll(){
    remover('.list-item');
}
    

// function that make the li item with the value of input (.text class or taskin variable)
function addtask(e){
    if(taskin.value === '') {
        alert('scrivi');
    }
    else{
        const li = document.createElement('li');
        li.className = 'list-item';
        if(taskdate){
            var date = document.querySelector('.setDate');
            li.appendChild(document.createTextNode(taskin.value + ' ' + date.value));
            }
        else{
            li.appendChild(document.createTextNode(taskin.value));
            
        }
        list.appendChild(li);
        taskin.value='';
    }
    
    e.preventDefault();
}

function checkTime(e){
    if(e.target.checked){
        const date =document.createElement('input');
        date.setAttribute('type', 'date');
        date.className='setDate';
        formDa.appendChild(date);
        taskdate = true;
    }
    else{
        taskdate = false;
        remover('.setDate');
    }
}
function remover(x){
    var rem= document.querySelector(x).remove();
}
