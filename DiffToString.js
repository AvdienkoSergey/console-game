class DiffToString {
  #diff;

  constructor(Diff) {
    this.#diff = Diff;
  }
  
  resultToString(callback) {
    this.#diff.result((result) => {
      if (result < 0) {
        console.log("Загаданное число меньше")
      } else if (result > 0) {
        console.log("Загаданное число больше")
      } else {
        console.log("Победа!!!")
      }
      callback(result)
    })
  }
}

module.exports = DiffToString;