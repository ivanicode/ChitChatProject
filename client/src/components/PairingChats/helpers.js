export function getRandomIntInclusive(min, max) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    }  while (randomNumber === getRandomIntInclusive.last)
    getRandomIntInclusive.last = randomNumber

    return randomNumber;
}
