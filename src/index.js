import readlineSync from 'readline-sync';

const gameEngine = (description, GameName) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? : ');
  console.log(`Hello ${name}!`);
  console.log(description);
  for (let i = 1; i <= 3; i += 1) {
    const game = GameName();
    const answer = game[0];
    const question = game[1];
    console.log(question);
    const userResponse = readlineSync.question('Your answer: ');
    if (String(answer) === userResponse) {
      console.log('Correct!');
    } else {
      console.log(`"${userResponse}" is wrong answer ;(. Correct answer was "${answer}" .`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameEngine;
