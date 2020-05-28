
const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? :');
  console.log(`Hello ${name}!`);
  console.log(regulations);
  for (let i = 1; i <= 3; i += 1) {
    const answer = ;
    console.log(`Question: ${answer}`);
    const result = readlineSync.question('Your answer: ');
    if (Number(result) === answer[0]) {
      console.log('Correct!');
    } else {
      return console.log(`"${result}" is wrong answer ;(. Correct answer was "${answer[0]}" .\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
game();
