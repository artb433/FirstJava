// let firstname = 'kofi'
// console.log(firstname);

// let age =13;
// if (age>=18){
//     console.log('You are an adult')
// }else {
//     console.log('You are young')
// }

// let age=34;
// let message=(age=>28)? 'You are an adult':'You are young';
// console.log(message);
``
// let fruits = ['mango','orange','pineapple']

// let person = {
//     fullName:"Tahiru Usman",
//     age:50,
//     hobbies:[]
// }

//   let marks = prompt("Input marks:");
//   const input =window.prompt("What's your name?");
//   if (marks >=80 && marks<=100) {
//     console.log("A");
//   } else if (marks >= 75 && marks <= 79) {
//     console.log("B+");
//   } else if (marks >= 65 && marks <= 69) {
//     console.log("C+");
//   } else if (marks >= 60 && marks <= 64) {
//     console.log("C");
//   } else if (marks >= 55 && marks <= 59) {
//     console.log("D+");
//   } else if (marks >= 50 && marks <= 54) {
//     console.log("D");
//   } else if (marks >= 0 && marks <= 49) {
//     console.log("B");
//   } else {
//     console.log(" Wrong input");
//   }

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What is your marks?  `, marks  => {
      try {
        if (marks >=80 && marks<=100) {
            console.log("A");
          } else if (marks >= 75 && marks <= 79) {
            console.log("B+");
          } else if (marks >= 65 && marks <= 69) {
            console.log("C+");
          } else if (marks >= 60 && marks <= 64) {
            console.log("C");
          } else if (marks >= 55 && marks <= 59) {
            console.log("D+");
          } else if (marks >= 50 && marks <= 54) {
            console.log("D");
          } else if (marks >= 0 && marks <= 49) {
            console.log("You had F, chairman wa faili ");
          } else {
            console.log("Wrong input");
          }
          
      } catch (error) {
          console.log(error)
          
      }
 
    readline.close()
  })



