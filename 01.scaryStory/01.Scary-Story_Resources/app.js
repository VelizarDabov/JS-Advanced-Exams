window.addEventListener("load", solve);

function solve() {
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let ageElement = document.getElementById('age');
let storyTitle = document.getElementById('story-title');
let genreElement = document.getElementById('genre');
let storyElement = document.getElementById('story');
let previewUlElement = document.getElementById("preview-list");
let btnPublish = document.getElementById('form-btn');
btnPublish.addEventListener('click', publishing);

let mainElement = document.getElementById("main");
let bodyElement = document.querySelector(".body");

function publishing(event){
event.preventDefault();
  let firstNameValue = firstName.value;
  let lastNameValue = lastName.value;
 let ageElementValue = ageElement.value;
  let storyTitleValue = storyTitle.value;
  let genreValue = genreElement.value;
  let storyValue = storyElement.value;

  if(!firstNameValue || !lastNameValue || !ageElementValue || !storyTitleValue || !genreValue || !storyValue){
    return;
  }
  let editFirstName = firstName.value;
  let editLastName = lastName.value;
  let editAge = ageElement.value;
  let editTitle = storyTitle.value;
  let editStory = storyElement.value;
  let editGenre = genreElement.value

  firstName.value = '';
  lastName.value = '';
  ageElement.value = '';
  storyTitle.value = '';
  genreElement.value= '';
  storyElement.value = '';

  let liElement = document.createElement("li");
  liElement.setAttribute('class', 'story-info');

  let articleElement = document.createElement("article");

  let fullName = document.createElement("h4");
  fullName.textContent = `Name: ${firstNameValue} ${lastNameValue}`;

  let age = document.createElement('p');
  age.textContent = `Age: ${ageElementValue}`;

  let title = document.createElement('p');
  title.textContent = `Title: ${storyTitleValue}`;

  let genre = document.createElement('p');
  genre.textContent = `${genreValue}`

  let story = document.createElement('p');
  story.textContent = `${storyValue}`

let saveBtn = document.createElement('button');
saveBtn.setAttribute('class', 'save-btn');
saveBtn.textContent = 'Save Story';

let editBtn = document.createElement('button');
editBtn.setAttribute('class', 'edit-btn')
editBtn.textContent = 'Edit Story';

let deleteBtn = document.createElement('button');
deleteBtn.setAttribute('class', 'delete-btn');
deleteBtn.textContent = 'Delete Story'


btnPublish.disabled = true;

articleElement.appendChild(fullName)
articleElement.appendChild(age);
articleElement.appendChild(title);
articleElement.appendChild(genre);
articleElement.appendChild(story)

liElement.appendChild(articleElement);
liElement.appendChild(saveBtn);
liElement.appendChild(editBtn);
liElement.appendChild(deleteBtn);

previewUlElement.appendChild(liElement);

  

saveBtn.addEventListener('click', save);
deleteBtn.addEventListener('click', deleted);
editBtn.addEventListener('click', edit);

function deleted(){
  liElement.remove();
  btnPublish.disabled = false;
  }
  function edit(){
    firstName.value = editFirstName;
   lastName.value = editLastName;
    ageElement.value = editAge;
   storyTitle.value = editTitle;
   storyElement.value= editStory;
 genreElement.value = editGenre;
   liElement.remove();
    btnPublish.disabled = false
 }
 function save(){
  mainElement.remove();
  let h1Saved = document.createElement("h1");
  h1Saved.textContent = "Your scary story is saved!";
  let bodyElement2 = document.createElement("div");
  bodyElement2.setAttribute('id', 'main');
  bodyElement.appendChild(bodyElement2);

  bodyElement2.appendChild(h1Saved);
 
}
}



}
