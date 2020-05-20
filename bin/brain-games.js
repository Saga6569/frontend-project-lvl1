#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? :');
console.log('Hello ' + name + '!');

 const games = () => {
 
 console.log('Answer "yes" if the number is even, otherwise answer "no"')

 console.log('Question: 15')
 const step1 = readlineSync.question('Your answer: ')
 if (step1 !== 'no') {
 return console.log("\"yes\" is wrong answer ;(. Correct answer was \"no\".Let's try again, " + name + "!")
 } else {
 console.log('Correct!');
 }
  console.log('Question: 6')
 const step2 = readlineSync.question('Your answer: ')
 if (step2 !== 'yes') {
 return console.log("\"no\" is wrong answer ;(. Correct answer was \"yes\".Let's try again, " + name + "!")
 } else {
 console.log('Correct!');
 }
  console.log('Question: 7')
 const step3 = readlineSync.question('Your answer: ')
 if (step3 !== 'no') {
 return console.log("\"yes\" is wrong answer ;(. Correct answer was \"no\".Let's try again, " + name + "!")
 } else {
 console.log('Correct!');
 }
 
 return console.log('Congratulations, ' + name + '!')
 };
games();
