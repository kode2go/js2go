const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// we want to listen for submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e)
{
  e.preventDefault();
  console.log(nameInput);
  console.log(nameInput.value);

  // do form validation so both forms must be there

  if(nameInput.value === '' || emailInput.value === '')
  {
    // alert not elegant to use
    //alert('please enter field')
    msg.classList.add('error')
    msg.innerHTML = 'Please enter all fields'
    // disappear after 3 sec
    setTimeout(() => msg.remove(),3000)
  }
  else
  {
    // alert('success')
    // add users
    // create list item
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
    // now append li to ul:
    userList.appendChild(li)
    // clear fields
    nameInput.value = '';
    emailInput.value = '';
    // this is just in UI not saved anywhere
    // will need to connect to DB with backend like nodejs, python , php which uses fetch APIs or ajax

  }
}
