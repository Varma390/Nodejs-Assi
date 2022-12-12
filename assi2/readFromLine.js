const readline = require('readline');

const data = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

data.question('Your name? ', (input) => {
  console.log('hai ' +input);
  data.close();
})