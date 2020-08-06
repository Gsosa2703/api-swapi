var character = prompt("Search a Star War Character");


const API = "https://swapi.dev/api/people/" + character;


fetch(API)
.then(data => {
    return data.json()
}).then(character => {
    const titulo = document.getElementById('nombre').innerHTML += character.name;
    return character
}).then(character => {
    fetch(homeworld.homeworld).then(response =>{
        return  response.json()
    }).then(response => {
        console.log(response.name)
        const  parrafoHomworld = document.getElementById('homeworld').innerHTML += response.name;
    }).catch(err => {
        console.error(err)
    })

    return character.starships
}).then(starships => {
    for ( let i = 0; i < starships.length; i++) {
        fetch(starships[i]).then(response=> {
            return response.json()
        }).then(starship => {
            console.log(starship)
        }).catch(err => {
            console.error(err)
        })
    }
    console.log(character.starships)
}).catch(err => {
    console.error(err)
})