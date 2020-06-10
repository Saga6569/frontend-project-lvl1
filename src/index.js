const comparison = (game_response, user_response, name) => {
  if (game_response === user_response) {
    console.log('Correct!');
    return 1;
  }
  console.log(`"${user_response}" is wrong answer ;(. Correct answer was "${game_response}" .\nLet's try again, ${name}!`);
  return 0;
};
export default comparison;
