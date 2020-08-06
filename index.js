var character = prompt("Search a Star War Character");


const API = "https://swapi.dev/api/people/" + character;


fetch(API)
.then(data => {
    return data.json()
}).then(character => {
    const titulo = document.getElementById('nombre').innerHTML = character.name;
}) 