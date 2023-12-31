//Executes when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  fetchAnimals();
});

//Fetches the characters details from our local server
async function fetchAnimals() {
  return fetch("http://localhost:3000/characters")
    .then((result) => result.json())
    .then((characters) => {
      characters.forEach((animal) => {
        renderCharactersData(animal);
      });
    });
}

//fetches the details of a specific character by id from our local server
async function detailsOfCharactersById(id) {
  return fetch("http://localhost:3000/characters" + `/${id}`).then(result =>
    result.json()
  );
}

//this renders the data of the characters
function renderCharactersData(animal) {
  let characterList = document.getElementById("character-nav");
  let span = document.createElement("span");
  span.textContent = animal.name;
  span.id = animal.id;
  span.addEventListener("click", CharacterClick);
  characterList.appendChild(span);
}

//it handles the click event on a character's name
function CharacterClick(e) {
  detailsOfCharactersById(e.target.id).then(renderDetails);
}

//renders the image, name and votes of a character
function renderDetails(animal) {
  const name = document.getElementById("name");
  name.textContent = animal.name;

  const image = document.getElementById("image");
  image.src = animal.image;
  image.alt = animal.name;

  const votes = document.getElementById("votes");
  votes.textContent = animal.votes;
}

//handles the submission of the form for the votes
document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const votesCount = document.getElementById("votes");
  votesCount.textContent =
    parseInt(form.votes.value) + parseInt(votesCount.innerText);
  form.reset();
});

//hanldes the reset button of the form
document.getElementById("reset-btn").addEventListener("click", () => {
  document.getElementById("votes").innerText = 0;
});
