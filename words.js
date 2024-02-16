
function getWords() {
  fetch('http://localhost:3001/api/v1/words')
  .then(resp => resp.json())
  .then((data) => {
    words = data
    setGame(data)
    // guessButton.addEventListener('click', submitGuess);
  })
}
