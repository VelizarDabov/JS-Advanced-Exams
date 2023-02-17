window.addEventListener("load", solve);

function solve() {
let firstNameElement = document.getElementById('first-name');
let lastNameElement =document.getElementById('last-name');
let ageElement = document.getElementById('age');
let genderElement = document.getElementById('genderSelect');
let taskElement = document.getElementById('task');
let submitBtn = document.getElementById('form-btn')
let clearBtn = document.getElementById('clear-btn')
submitBtn.addEventListener('click', submitTask);
let previewElement = document.getElementById('in-progress');
let finishSection = document.getElementById('finished')
function submitTask(e){
  if(firstNameElement.value =='' || lastNameElement.value == ''|| ageElement.value == '' || taskElement.value == '' || genderElement == ''){
    return;
  }
e.preventDefault();
let firstName = firstNameElement.value;
let lastName = lastNameElement.value;
let age = ageElement.value;
let gender = genderElement.value;
let task = taskElement.value;


let liElement = document.createElement("li");
    liElement.setAttribute("class", "in-progres");

    let articleElement = document.createElement("article");

    let fullName = document.createElement('h4');
    fullName.textContent = `${firstName} ${lastName}`;

    let genderAge = document.createElement('p');
    genderAge.textContent = `${gender}, ${age}`

    let currTask = document.createElement('p');
    currTask.textContent = `${task}`;

    let editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit';

    let completeBtn = document.createElement('button');
    completeBtn.setAttribute('class', 'complete-btn');
    completeBtn.textContent = 'Mark as complete'

    articleElement.appendChild(fullName);
    articleElement.appendChild(genderAge);
    articleElement.appendChild(currTask);

    liElement.appendChild(articleElement);
    liElement.appendChild(editBtn);
    liElement.appendChild(completeBtn);

    previewElement.appendChild(liElement)
    const spanCount = document.getElementById("progress-count");
    spanCount.textContent = Number.parseInt(spanCount.textContent) + 1;
  
clearInput()
completeBtn.addEventListener('click', completeFunc);
editBtn.addEventListener('click', editFunction);
clearBtn.addEventListener('click', clear);
function completeFunc(e){

const liElement = e.target.parentElement;

const ulElement = liElement.parentElement;

const firstBtn = liElement.children[1];
const secondBtn = liElement.children[2];

liElement.removeChild(firstBtn);
liElement.removeChild(secondBtn);

finishSection.appendChild(liElement);
const spanCount = document.getElementById("progress-count");
spanCount.textContent = Number.parseInt(spanCount.textContent) - 1;
ulElement.removeChild(liElement);



}
function clear(){
  finishSection.remove(liElement);

}
function editFunction(){
  firstNameElement.value = firstName
  lastNameElement.value = lastName
  ageElement.value = age
  genderElement.value = gender
  taskElement.value = task;
  const spanCount = document.getElementById("progress-count");
  spanCount.textContent = Number.parseInt(spanCount.textContent) - 1;
  liElement.remove()
}
function clearInput(){
  firstNameElement.value = '';
 lastNameElement.value = '';
 ageElement.value = '';
 genderElement.value = '';
 taskElement.value = '';
}
}
}
