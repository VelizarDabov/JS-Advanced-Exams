function solve() {
   const fname = document.getElementById('fname');
   const lname = document.getElementById('lname');
   const email = document.getElementById('email');
   const birth = document.getElementById('birth');
   const position = document.getElementById('position');
   const salary = document.getElementById('salary');

   const tbody = document.getElementById('tbody');
   const addSum = document.getElementById('sum');
document.getElementById('add-worker').addEventListener('click', (e)=> {
    e.preventDefault();
    if(fname !== '' || lname !== ''|| email !== '' || birth !== ''|| position !== '' || salary !==''){
    addEmploye(e, fname.value, lname.value, email.value,birth.value, position.value, salary.value)
  
    clearInput();
    }
    
})



function addEmploye(fname, lname, email,birth, position, salary){
    const tr = createElement('tr');
    createElement('td', `${fname.value}`, tr)
    createElement('td', `${lname.value}`, tr)
    createElement('td', `${email.value}`, tr)
    createElement('td', `${birth.value}`, tr)
    createElement('td', `${position.value}`, tr)
    createElement('td', `${salary.value}`, tr)
    const td = createElement('td', '', tr);
    let fireBtn = createElement('button', 'Fired', td);
    fireBtn.setAttribute('class', 'Fired');
    let editBtn = createElement('button', 'Edit', td);
    editBtn.setAttribute('class', 'edit');
    tbody.appendChild(tr);
    
    const currentSalary = Number(addSum.textContent);
    const addedSalary = Number(salary.value);

    addSum.textContent = (currentSalary + addedSalary).toFixed(2);
    editBtn.addEventListener('click', (e)=> {
        editWorker(e, fname, lname, email, birth, position, salary)
       })
}
function editWorker(e, firstName, lastName, emailAdress, birthDate,currentPosition, currSalary){
    e.preventDefault()
    e.target.parentNode.parentNode.remove();
    fname.value = firstName;
    lname.value = lastName;
    email.value = emailAdress;
    birth.value = birthDate;
    position.value = currentPosition;
    salary.value = currSalary;
    const sumSalery = Number(addSum.textContent);
    addSum.textContent = Math.abs(Number(currSalary) - sumSalery).toFixed(2)
    }
   function createElement(type, content, parent){
    const element = document.createElement(type);
    element.textContent = content;
    if(parent){
        parent.appendChild(element);
    }
    return element
   }
   function clearInput(){
    fname.value = '';
    lname.value = '';
    email.value = '';
    birth.value = '';
    position.value = '';
    salary.value = '';
}
}
solve()