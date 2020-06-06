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

const dele = document.querySelector('.delete');

let taskdate =false;

// function to read the value of input
readtask();
 
function readtask(){
    inputtas.addEventListener('submit', addtask);
    check.addEventListener('change', checkTime);
    remove.addEventListener('click', removeAll);
    list.addEventListener('click', removet);
}

//fuction will remove all the task

function removeAll(){
        while(list.firstChild){
            list.removeChild(list.firstChild);
        }
    
}
    

// function that make the li item with the value of input (.text class or taskin variable)
function addtask(e){
    if(taskin.value === '') {
        alert('Ah scriva nguna cosa');
    }
    else{
        const li = document.createElement('li');
        const del = document.createElement('a');
        li.className = 'list-item';
        del.className ='delete';
        del.appendChild(document.createTextNode("⊠"));
        if(taskdate){
            var date = document.querySelector('.setDate');
            const second = document.createElement('a');
            second.className ='hour';
            second.appendChild(document.createTextNode(date.value));
            li.appendChild(del);
            li.appendChild(document.createTextNode(taskin.value));
            li.appendChild(second);
            }
        else{
            li.appendChild(del);
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
        date.setAttribute('type', 'time');
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

function removet(x){
    if(x.target.classList.contains('delete')){
        x.target.parentElement.remove();
    }
}
