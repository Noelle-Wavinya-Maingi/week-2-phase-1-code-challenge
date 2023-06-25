//Executes when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  fetchCharacters();
  
  })  

async function fetchCharacters(){
  return fetch('http://localhost:3000/characters')
  .then(result => result.json())
  .then(characters => {
    characters.forEach(animal => {
      renderCharacters(animal)
    });
  })
}

async function details (id){
  return fetch('http://localhost:3000/characters' + `/${id}`)
  .then(result => result.json())
  }

function renderCharacters (animal){
  let characterList = document.getElementById('character-nav');
  let span = document.createElement('span');
  span.textContent = animal.name;
  span.id = animal.id;
  span.addEventListener('click', CharacterClick);
  characterList.appendChild(span);
}

function CharacterClick(e){
details(e.target.id)
.then(renderDetails);
}

function renderDetails(animal){
  const animalDetails = document.getElementById('details-character');
  const name = document.getElementById('name');
  name.textContent = animal.name;

  const image = document.getElementById('image');
  image.src = animal.image;

  const votes = document.getElementById('votes');
  votes.textContent = animal.votes
}

document.getElementById('form').addEventListener('submit',(event) => {
  event.preventDefault();
  const form = event.target;
  const votesCount = document.getElementById('votes');
  votesCount.textContent = parseInt(form.votes.value) + parseInt(votesCount.innerText);
  form.reset();
})

document.getElementById('reset-btn').addEventListener('click', () => {
  document.getElementById('votes').innerText = 0;
})
