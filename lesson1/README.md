# Lesson 1

## Getting Started - ALERT!!!

Now we are assuming you setup everything as mentioned on the landing page with `Setup in VS Code and Browser Console` found here: https://github.com/kode2go/js2go

Now you should have the following html page, I added the following h1 tag too:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>JS Lesson</h1>
</body>
</html>
```

Now to run JS code you need to enclose it within `<script>` tage and the simplest JS code to run is the alert function 
which pops up a window in your browser and can be done by adding the following in the body tag:

```html
<body>

    <h1>JS Lesson</h1>

    <script>
        alert("hello world")
    </script>

    <script src="main.js" type="text/javascript"></script>
    
</body>
```

Save your code in VS Code and it should pop up in your browser.

Now it is preferable to put your JS code in its own file like `main.js` which will interact with the html. So we comment out the original `<script>` code
and then we add `<script src="main.js" type="text/javascript"></script>` as follows:
```html
<body>

    <h1>JS Lesson</h1>

    <script>
        alert("hello world")
    </script>

    <script src="main.js" type="text/javascript"></script>
    
</body>
```

Now you will need to create a file called `main.js` in the same level as the html file.

Now add the same alert function `alert("hello world")` but now in the `main.js` file. Save your code in VS Code and it should pop up in your browser.

Now alert is not ideal to use as it blocks all other features of the site, so we won't use it for now.

## The Basics

So let us first comment out the `alert("hello world")` with `//` in front of it:

```js
//alert("hello world")
```

Or we can also use `/* */` for multi-line comments:

```js
/*
alert("hello world")
*/
```

Now let us create some variables, namely `highscore`, `myname` and `myage` and we do that using the `let` and `const` keywords.
We also assign it values like:

```js
let highscore = 0
highscore = 98
const myname = 'myname'
const myage = 50
```

So highscore was fist assigned the value `0` and then changed to `98` which is what you can do with `let`. However, with `const` we can't
change it again. We assigned `myname` to `'myname'` and not the single quotes we used as its text. And then `myage` with 50.

Let us now print out these values in the console with `console.log` in the following way:

```js
let highscore = 0
highscore = 98

const myname = 'myname'
const myage = 50

console.log('My highscore ' + highscore + ' in the game');

// back ticks allow you to add variables inside the string
console.log(`my name is ${myname} and age is ${myage}`)
```

