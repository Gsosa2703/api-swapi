var character = prompt("Search a Star War Character");


const API = "https://swapi.dev/api/people/" + character;


fetch(API)
.then(data => {
    return data.json()
}).then(character => {
    const titulo = document.getElementById('nombre').innerHTML += character.name;
    return character
}).then(character => {
    fetch(character.homeworld).then(response => {
        return  response.json()
    }).then(response => {
        console.log(response.name)
        document.getElementById('homeworld').innerHTML += response.name;
    }).catch(err => {
        console.error(err)
    })
    return character.starships
}).then(starships => {
    if(starships.length === 0){
        document.getElementById('titulo-starships').innerHTML = "This character doesnt have starships"
    }else{
        for ( let i = 0; i < starships.length; i++) {
            fetch(starships[i]).then(response=> {
                return response.json()
            }).then(starship => {
                renderStarships(starship)
            }).catch(err => {
                console.error(err)
            })
        }
    }

}).catch(err => {
    console.error(err)
})

function renderStarships(starship){
        let lista = [];
        let starships = `<li> ${starship.name} </li>`
        lista.push(starships)
        document.getElementById('starships').innerHTML += lista;
}