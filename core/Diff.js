class Diff {
  #secret;
  #guess;

  constructor(Secret, Guess) {
    this.#secret = Secret;
    this.#guess = Guess;
  }
  
  result(callback) {
    this.#guess.userNumber((num) => {
      callback(this.#secret.secretNumber() - num);
    })
  }
}

module.exports = Diff;
