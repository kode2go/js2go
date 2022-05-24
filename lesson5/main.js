// Lesson 2 - OOP, protoypes, classes

// pre es5, pre classes


// constrcutors 
//create objects with prototypes or es6 classes

// start with capital
// construcotr function
function Person(firstName, lastName, dob)
{
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = dob;
	this.dob2 = new Date(dob);
	// add methods to person object
	this.getBirthYear = function()
	{
		return this.dob2.getFullYear();
	}
	this.getFullName = function()
	{
		return `${this.firstName} ${this.lastName}`
	}
}

// Instaniata object with constructor function
const person1 = new Person('John', 'Doe','4-3-1980');
const person2 = new Person('John2', 'Doe2','1-13-1980');

console.log(person1)
console.log(person2.firstName)

// Dates
//.. change date as strings and as date format with lots of methods:
console.log(person2.dob2.getFullYear())

console.log(person2.getBirthYear());

console.log(person2.getFullName());

// not the best way to do this - better to use prototypes

console.log(person1)

// we can add methods and objects to prototypes - so we may
//not always want getbirthyear and getfullname with each person
//so we can add as a prototype

Person.prototype.getBirthYear2 = function()
{
	return this.dob2.getFullYear();
}

Person.prototype.getFullName2 = function()
{
	return `${this.firstName} ${this.lastName}`
}


console.log(person2.getBirthYear2());

console.log(person2.getFullName2());

console.log(person1)

// with es6 or es2015 - we uses classes and added to JS
//... does same thing under the hood just looks prettier - sytactic sugar!

// Class
// methods is a function in a class
class PersonClass {
	constructor(firstName, lastName, dob)
	{
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = dob;
		this.dob2 = new Date(dob);
	}

	getBirthYear()
	{
		return this.dob2.getFullYear();
	}
	getFullName()
	{
		return `${this.firstName} ${this.lastName}`
	}

}


// Instaniata the class
const person3 = new PersonClass('John', 'Doe','4-3-1980');
const person4 = new PersonClass('John2', 'Doe2','1-13-1980');

console.log(person3)
console.log(person4.firstName)

console.log(person4.dob2.getFullYear())

console.log(person4.getBirthYear());

console.log(person4.getFullName());

console.log(person3)
