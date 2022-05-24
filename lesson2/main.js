// Arrays

// can have multiple data types in arrays, and not limited to size of array
// not statisticly typed like
//...const name:string 
// like using TypeScript - which is JS with more features

// old way
// new refers to a constractor
const mynum = new Array(1,2,3,4,5);

console.log(mynum);

// new way

const fruits = ['apples', 'bananas','pears',10, true]

console.log(fruits);

// arrays are 0 based

console.log(fruits[1]);

// you can modify specific values in const array but entire one like
//... fruits = [] 
fruits[3] = 'grapes';

console.log(fruits);

// sometimes you don't know all elements in array so you can 
// just add/append to end with push:

fruits.push('pineapple')

console.log(fruits);

// add to the beginning:

fruits.unshift('mangos')

console.log(fruits);

// remove last one:

fruits.pop()

console.log(fruits);

// check to see if something in array

console.log(Array.isArray(fruits));

console.log(Array.isArray('apple'));

// index of certain value

console.log(fruits.indexOf('pears'))

console.log(fruits);


// Object literals - key value pairs

const person = {

	firstName: 'John',
	lastName: 'Doe',
	age: 30,
	hobbies: ['music', 'movies', 'sports'],
	address: {
		street: '50 main street',
		city: 'Boston',
		state: 'MA'
	}
}

console.log(person);

console.log(person.firstName,person.lastName);

console.log(person.hobbies[1])

console.log(person.address.city)

// can do destructing to get these as variables, like pulling it out
//...of object literal

const {firstName, lastName, address: {city}} = person;

console.log(firstName)

console.log(city)

// add properties

person.email = 'john@gmail.com';

console.log(person);

// working with arrays of objects:

const todos = [
	{
		id: 1,
		text: 'Take out trash',
		isComplete: true
	},

	{
		id: 2,
		text: 'Meeting with boss',
		isComplete: true
	},

	{
		id: 3,
		text: 'Denits',
		isComplete: false
	},
]

// array with 3 objects
console.log(todos)

console.log(todos[1].text)

// JSON - sending / receiving data in json format - similar to array of objects
// you will see its quite similar except for double quotes around keys and values:
// we can covert with: https://jsonformatter.curiousconcept.com/#

// or with:

const todoJSON = JSON.stringify(todos);
console.log(todoJSON)
