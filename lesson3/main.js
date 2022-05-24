// Part 4 - loops

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
