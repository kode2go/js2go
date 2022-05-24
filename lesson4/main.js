// Functions


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

// function addNums(num1, num2)
// defaults
function addNums(num1=1, num2=2)
{
	console.log(num1+num2)
	return num1 + num2
}

addNums(5,4)
// ouput not a number if no default
addNums()

console.log(addNums(5,4))

// arrow function:

const addNumsArrow = (num1=1, num2=2) =>
{
	console.log(num1+num2)
	return num1 + num2
}

addNumsArrow(5,4)
// ouput not a number if no default
addNumsArrow()

console.log(addNumsArrow(5,4))

// if its only one expression we don't need curly brackets or return:

// const addNumsArrowLine = (num1=1, num2=2) => console.log(num1+num2)

const addNumsArrowLine = (num1=1, num2=2) => num1+num2


addNumsArrowLine(5,4)
// ouput not a number if no default
addNumsArrowLine()

console.log(addNumsArrowLine(5,4))

// and slim it down even further if you have only one param:

const addNumsArrowLineSlim = num1 => num1+5


addNumsArrowLineSlim(5)
// ouput not a number if no default
addNumsArrowLineSlim()

console.log(addNumsArrowLineSlim(5))


// can use it with foreach:
// quite handy for quite and easy function (lambda - python)
todos.forEach((todo) => console.log(todo))

// can use it with lexical this
