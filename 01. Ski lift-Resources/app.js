window.addEventListener('load', solve);

function solve() {
   let firstNameElement = document.getElementById('first-name');
   let lastNameElement = document.getElementById('last-name');
   let peopleCountElement = document.getElementById('people-count');
   let dateElement = document.getElementById('from-date');
   let daysCount = document.getElementById('days-count');
let confirmElement = document.querySelector('.confirm-ticket')
   let infoListElement = document.querySelector('.ticket-info-list')
 let nextBtn = document.getElementById('next-btn')
 nextBtn.addEventListener('click', nextStep);

 let mainElement = document.getElementById('main')
let bodyElement = document.querySelector('.body')
   function nextStep(e){
    e.preventDefault();
   
    let firstName = firstNameElement.value;
    let lastName = lastNameElement.value;
    let peopleCount = peopleCountElement.value;
    let date = dateElement.value;
    let days = daysCount.value;

    if(!firstName || !lastName || !peopleCount || !date || !days ){
        return 
    }else{
        ticketReview(firstName, lastName, peopleCount, date, days)


        clearInput()
    }

   }
   function ticketReview(firstName,lastName, peopleCount, date, days){
    let liElement = document.createElement('li');
    liElement.setAttribute('class', 'reservation-content')

    let article = document.createElement("article");

    let name = document.createElement('h3');
    name.textContent = `${firstName} ${lastName}`

    let dateEl = document.createElement('p');
    dateEl.textContent = `From date: ${date}`


    let daysEl = document.createElement('p');
    daysEl.textContent = `For ${days} days`;

    let peopleEl = document.createElement('p');
    peopleEl.textContent = `For ${peopleCount} people`

    let editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', editing);

        let continueBtn = document.createElement("button");
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = 'Continue';
    continueBtn.addEventListener('click', countinue);


    article.appendChild(name)
article.appendChild(dateEl);
article.appendChild(daysEl);
article.appendChild(peopleEl);

    liElement.appendChild(article)
liElement.appendChild(editBtn);
liElement.appendChild(continueBtn)
    infoListElement.appendChild(liElement)
    
    nextBtn.disabled = true;
   
   function editing(){
    firstNameElement.value = firstName;
    lastNameElement.value = lastName;
    peopleCountElement.value = peopleCount;
    dateElement.value = date;
    daysCount.value = days

    liElement.remove();
    nextBtn.disabled = false;
   }



   function countinue(){
    let liElementCountinue = document.createElement('li');
    liElementCountinue.setAttribute('class', 'reservation-content')

    let article = document.createElement("article");

    let name = document.createElement('h3');
    name.textContent = `${firstName} ${lastName}`

    let dateEl = document.createElement('p');
    dateEl.textContent = `From date: ${date}`


    let daysEl = document.createElement('p');
    daysEl.textContent = `For ${days} days`;

    let peopleEl = document.createElement('p');
    peopleEl.textContent = `For ${peopleCount} people`

    let confirmBtn = document.createElement('button');
    confirmBtn.setAttribute('class', 'confirm-btn');
        confirmBtn.textContent = 'Confirm';
       confirmBtn.addEventListener('click', confirm);

        let cancelBtn = document.createElement("button");
        cancelBtn.setAttribute('class', 'cancel-btn');
        cancelBtn.textContent = 'Cancel';
  cancelBtn.addEventListener('click', canceling)


article.appendChild(name)
article.appendChild(dateEl);
article.appendChild(daysEl);
article.appendChild(peopleEl);

    liElementCountinue.appendChild(article)
liElementCountinue.appendChild(confirmBtn);
liElementCountinue.appendChild(cancelBtn)
liElement.remove();
confirmElement.appendChild(liElementCountinue)
  
   function confirm(){
mainElement.remove()

    let confirmingInfo = document.createElement('h1');
    confirmingInfo.textContent = 'Thank you, have a nice day!';

    let bodyElement2 = document.createElement('div');
   bodyElement2.setAttribute('class', 'snowflakes');
  
    let backBtn = document.createElement('button');
    backBtn.setAttribute('class', 'back-btn')
    backBtn.textContent = 'Back';

    bodyElement.appendChild(bodyElement2);
    bodyElement.appendChild(backBtn)
   bodyElement2.appendChild(confirmingInfo)
    bodyElement2.appendChild(backBtn)
   }
function canceling(){
    nextBtn.disabled = false;
    liElementCountinue.remove()
}
    
   }
   
}
   function clearInput(){
    firstNameElement.value = '';
    lastNameElement.value = '';
    peopleCountElement.value = '';
    dateElement.value = '';
    daysCount.value = '';
   }
}



    
    
