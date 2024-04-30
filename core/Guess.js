const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

class Guess {
  #rl = readline.createInterface({ input, output });
  
  userNumber(callback) {
    this.#rl.question('Угадайте число от 0 до 99? ', (num) => {
      callback(num);
    });
  }
}

module.exports = Guess
