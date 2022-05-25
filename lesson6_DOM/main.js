// Selecting
// parent object of browser
console.log(window)

// alert(1)
// window.alert(1)

// the document - documnet object model - DOM

// single element
console.log(document.getElementById('my-form'))
const form = document.getElementById('my-form')
console.log(form)

//many have used new tool called jquery which allows you 
//...to fetch more than just id, like classes, tags themselves, anything
console.log(document.querySelector('.container'))
// selects the first one
console.log(document.querySelector('h1'))


// multiple element
//...nodelist, can run array methods on it, foreach...see prototypes
console.log(document.querySelectorAll('.item'))

//loop thrugh

const items = document.querySelectorAll('.item')
items.forEach((item) => console.log(item))

// older ones - dont use
//...cant use array methods - need to convert it to array
console.log(document.getElementsByClassName('item'))
console.log(document.getElementsByTagName('li'))

// changing elements
const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
// for second 1
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1> Hello </h1>'

// styles

const btn = document.querySelector('.btn');
// btn.style.background = 'red';
// why would you do this, why not use css, well
//..this is for events if you want to make things dynamic

// events

// event, then function when happens (arrow function easier)
// btn.addEventListener('click', (e) => 
btn.addEventListener('mouseover', (e) => 
{
  // stop from flashing we take away form functionality with:
  e.preventDefault();
  console.log('click')
  // event object
  console.log(e)
  console.log(e.target)
  // lets changes things when we click:
  document.querySelector('#my-form').style.background = '#ccc';
  // or change a class from css:
  // kind of useless but shows the example
  // document.querySelector('body').classList.add('bg-dark')
  // adding HTML
  document.querySelector('.items').lastElementChild.innerHTML = '<h1>123</h1>'

});
