// Loops

let todos = [
	{
		id: 1,
		text: 'Take out trash',
		isComplete: true,
		date: '2023-01-01'
	},

	{
		id: 2,
		text: 'Meeting with boss',
		isComplete: true,
		date: '2023-02-04'
	},

	{
		id: 3,
		text: 'Denits',
		isComplete: false,
		date: '2023-05-21'
	},
]

todos.push({
    id: 4,
    text: 'Meeting with bank',
    isComplete: true,
    date: '2023-06-11'});

for(let i = 0; i < 10; i++)
{

	console.log(`for loop num ${i}`);
}

// while loops:

let ii = 0;
while(ii < 10)
{
	console.log(`num while loop: ${ii}`)
	ii++;

}

// ways to loop arrays

for(let i = 0; i < todos.length; i++)
{

	console.log(todos[i]);
}

// Filter certing lists based on 'Meeting'

let filteredTexts = [];
for (let i = 0; i < todos.length; i++) {
  if (todos[i].text.includes('Meeting')) {
    filteredTexts.push(todos[i].text);
  }
}

filteredTexts

// Change certain field

for (let i = 0; i < todos.length; i++) {
  if (todos[i].id === 2) {
    todos[i].text = 'Dinner';
    break; // Assuming there is only one object with id: 2, we can exit the loop once found
  }
}


// for of - easier to read

for (let todo of todos)
{
	console.log(todo)
}

// high order array methods - best way for iteration for arrays

// forEach, map, filter

todos.forEach(function(todo) {
	// return function
	console.log(todo.text)

});

// map - returns an array


const todoText = todos.map(function(todo) {
	return todo.text
});

console.log(todoText)


// filter

const todoTextComplete = todos.filter(function(todo) {
	return todo.isComplete === true;
});

console.log(todoTextComplete)

// we can chain these methods:

const todoTextCompleteText = todos.filter(function(todo) {
	return todo.isComplete === true;
}).map(function(todo) {
	return todo.text;
})

// this is really important and functional programming!!!
// can manipulate data any way you wish
console.log(todoTextCompleteText)

// part 5 - conditionals

const xx = 10;

// double equal - does not match data type

if(xx == 10)
{
	console.log('x is 10')
}

if(xx == '10')
{
	console.log('x is 10')
}

// triple equal - matches data types
if(xx === 10)
{
	console.log('x is 10')
}

if(xx === '10')
{
	console.log('x is 10')
}
else
{
	console.log('x is not 10')
}

// else if and multiple conditions (better than nesting if statements)

const yy = 10

if(xx === 10 || yy > 10)
{
	console.log('x is 10')
}
else if (xx > 10)
{
	console.log('x > 10')
}
else
{
	console.log('x is not 10')
}

// ternery operator ? - shorthand if

const zz = 100;

// ? then
// : else
const color = zz > 10 ? 'red' : 'blue';

console.log(color)

// switches

switch (color)
{
	case 'red': 
		console.log('color is red');
		break;
	case 'blue':
		console.log('color is blue');
		break;
	default:
		console.log('color neither')
}
