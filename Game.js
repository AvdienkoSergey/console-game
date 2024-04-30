class Game {
  #attempts;

  constructor(Attempts) {
    this.#attempts = Attempts;
  }

  start() {
    this.#attempts.matches((result) => {
      result 
        ? console.log("Вы проиграли :(")
        : console.log("Вы выиграли :)")

      console.log("Для выхода из игры нажмите Ctrl + C")
    })
  }
}

module.exports = Game;