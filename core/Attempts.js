class Attempts {
  #diff;
  #max;
  #count = 0;

  constructor(VerboseDiff, max) {
    this.#diff = VerboseDiff;
    this.#max = max;
  }

  async matches(callback) {
    const promise = new Promise((resolve, reject) => {
      this.#diff.resultToString((result) => resolve(result));
    })
    const bool = await promise.then((result) => result != 0);
    if (this.#count < this.#max && bool) {
      this.#count++;
      this.matches(callback);
    } else {
      callback(bool);
    }
  }
}

module.exports = Attempts;
