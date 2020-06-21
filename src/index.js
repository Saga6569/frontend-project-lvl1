import readlineSync from 'readline-sync';

const gameEngine = (gameСonditions, gameFunction) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? : ');
  console.log(`Hello ${name}!`);
  console.log(gameСonditions);
  for (let i = 1; i <= 3; i += 1) {
    const answer = gameFunction();
    console.log(answer[1]);
    const userResponse = String((readlineSync.question('Your answer: ')));
    if (String(answer[0]) === userResponse) {
      console.log('Correct!');
    } else {
      console.log(`"${userResponse}" is wrong answer ;(. Correct answer was "${answer[0]}" .`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameEngine;
