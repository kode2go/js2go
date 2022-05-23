alert("hello world")

//single line comment

/*
multi-line comment
*/

let highscore = 0
highscore = 98

const myname = 'kossi'
const myage = 50

console.log('My highscore ' + highscore + ' in the game');

// back ticks allow you to add variables inside the string
console.log(`my name is ${myname} and age is ${myage}`)

console.log(typeof(myname))
console.log(typeof(myage))

const mytext = "hello kossi"

console.log(mytext.length)

console.log(mytext.toUpperCase())

console.log(mytext.substring(0,3))

// chain methods
console.log(mytext.substring(0,3).toUpperCase())

const mytext2 = 'tech, computer, coding'

// note it is delimeted with a command and space
console.log(mytext2.split(', '))
