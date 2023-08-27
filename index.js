
// document.getElementById("count-el").innerText = 5


// let firstBatch = 5
// let secondBatch = 10
// let count = firstBatch + secondBatch


// console.log(count)


// * Create variable, myAge, and set its value to your age
// let myAge = 28

// //* 2. Log the myAge variable to the console

// console.log(myAge)


// * 1.Create two variables , myAge and humanDogRatio
// let myAge = 28
// let humanDogRatio = 7
// //* 2.Multiply the two together and store the result in myDogAge
// let myDogAge = myAge * humanDogRatio
// //* 3. Log myDogAge to the console
// console.log(myDogAge)


// let count = 5
// //* count + 1 for increment the value 
// count = count + 1 //* 5 + 1 
// console.log(count)


// * Create a variable bonusPoints. Initialize it as 50. Increase to it 100
// let bonusPoints =  50
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// //* Decrease it down to 25, and then finally increase it to 70 

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)



// * initialize the count as 0
// * listen for clicks on the  increment button
// * increment the count variable when the button is clicked 
// * change the count-el in the HTML to reflect the new count 


// function increment() {
//     console.log("The button was clicked")
// }
// increment()
// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()

// //* GO 
// //* Players are running the race
// //* Race is finished

// //* Get ready for a new race

// countdown()


// * Create a function (you decide the name) that logs out the number 42 to the  console.

// function randomThing() {
//     console.log(42)
// }
// //* Call/invoke the function
// randomThing()


// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// //* Create a function that logs out the sum of all lap times 

// function logTapTime() {
//     let totalTIme = lap1 + lap2 + lap3
//     console.log(totalTIme)
// }
// logTapTime()

// let lapCompleted = 0

// //* Create a function that increments the lapsCompeted variable with one 

// function incrementLap() {
//     lapCompleted = lapCompleted + 1
// }
// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapCompleted)

// * let count =5
// * count = count + 1
// * console.log(count)

// * initialize the count = 0
// * listen for clicks on the increment button
// * increment the count variable when the button is clicked (log it out )
// * change the count-el in the HTML to reflect the new count 

// let countEl = document.getElementById("count-el") //* Pass in argument
// console.log(countEl)


// let count = 0

// function increment() {
//     count = count + 1
//     countEl.innerText = count
//     console.log(count)
//     // alert('increment') 
// }

// * grab the count-el elemeent, store it in a countEl variable 
// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")
// let count = 0
// console.log(countEl)

// function increment() {
//     count += 1
//     countEl.innerText = count
// }

// function  save() {
//     //* 2. Create a variable that contains both the count and the dash seperator, i.e. 12, 
//     let countStr = count + " - "
//     //* 3. Render the variable i n the saveEl using innerText
//     saveEl.textContent += countStr
//     countEl.textContent = 0
//     count = 0
//     //* NB. Make sure to not delete the existing content of the paragraph
//     console.log(count)
// }

// //* String JavaScripts

// let userName = "Elmar"
 
// console.log(userName)


// * Create a variable, message, that stores : "You have tree new notifications"

// let notify = "You have tree notifications"

// console.log(notify, userName)

// * Create a variable, message that stores : We have logged
// * Create a variable, messageToUser,that contains the message we have logged

// let messageToUser = "We have logged"
// messageToUser = notify , userName
// console.log(messageToUser)
// console.log(notify,userName,messageToUser)
// console.log(notify + ", " + userName + ", " + messageToUser)

// * Create two variable name and greeting. The name variable should store your name 
// let name = "Elmar"
// let greeting = "Hi my name is "
// * and the greeting should store e.g. "Hi, my name is"

// //* Create a third variable, myGreeting, that contatenates the two strings
// let myGreeting = greeting + name
// console.log(myGreeting)
// //* Log myGreeting to console

// //*String and Numbers
let points  =  4
let bonusPoints = "10"
let totalPoints =  points + bonusPoints
console.log(totalPoints)

console.log(4 + 5) //* 9
console.log("2" + "4") //* 24
console.log("5" + 1) //* 51 
console.log(100 + "100") // * 100100


// //* Grab the welcome-el paragraph and store it in a variable called welcome-el
// let intro  = document.getElementById("welcome-el")
// //* Create two variables (name&greeting) that contains your name
// let name = "Elmar"
// let greeting = "Welcome back "
// //* and the greeting we want to render on the page 
// let message = greeting + name
// //* Render the welcome message using welcome-el.innertext
// intro.innerText =  greeting + name 
// //* Add an emoji to the end 👊🏻 
// //*WRITE YOUR CODE HERE
// //* HINT: count = count + 1
// // intro.innerText = intro.innerText + " 👊🏻"
// intro.innerText += " 👊🏻"


//! Practice
 //*Create two variables, firstName and lastName
let firstName = "Elmar"
let lastName  = " Jafarli"
let notify = "Hi There "
//* Concatenate the two variables into a third variable called fullName
//* Log fullName to the console


function message() {
 let fullName = notify + firstName + lastName
 console.log(fullName)
}
message()

let myPoint = 3


//* Create two functions, add3Points() and removePoint(), and have them 
//* add/remove points to/from the myPoints variable 

function add3Points() {
    myPoint += 3
}
function remove1Point() {
    myPoint -= 1
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()

//* Call the functions to that the line below logs out 10
console.log(myPoint)
// //* Try to predict what each of the lines will log out 
console.log("========================")
// //* Try to predict what each of the lines will log out
console.log("2" + 2) //* 22
console.log(11 + 7) //* 18
console.log(6 + "5") //* 65
console.log("My Points: " + 5 + 9) //*My Points 14
console.log(2 + 2) //* 4
console.log("11" + "14") //* 1114

//* When the user clicks the purchase button, render out
//* "Something went wrond please try again" in the paragraph
//* that has the id="error"


let errorParagraph = document.getElementById("error")
console.log(errorParagraph)

function purchase() {
    console.log("button clicked")
    errorParagraph.textContent = "Something went wrong please try again"
}  

let errorMessage = document.getElementById("home")
console.log(errorMessage)

function homeReturn() {
    console.log("button clicked")
    errorMessage.textContent = "There is a error try again"
}


let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let total = document.getElementById("sum-el")
console.log(total)
//* Create four functions: add(), subtract(), divide(), multiply()
function add() {
    let result = num1  + num2
    total.textContent = "Sum:" + result
}

function subtract() {
    let result = num1 - num2
    total.textContent =  "Sum: " + result
}

function divide () {
    let result = num1 / num2
    total.textContent  = "Sum: " + result
}

function multiply() {
    let result  = num1 * num2
    total.textContent = "Sum: " + result
}
//* Call the correct function when the user clicks on one of the button 
//* Perform the given calculation using num1 and num2 
//* Render the result of the calculation in the paragraph with id ="sum-el"


//* E.g. if the user clicks on the  "Plus " button, you should render 
//* "Sum1: 10" (since 8+2 = 10) inside the paragraph with id="sum-el"

