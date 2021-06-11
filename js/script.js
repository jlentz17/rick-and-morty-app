var characterButton = document.getElementById("characterButton");


var modal = document.querySelector(".modal");

var deleteBtn = document.querySelector(".deleteBtn");

var endPoint = `https://rickandmortyapi.com/api/character`

var characterName = document.querySelector(".characterName");
var characterEpisodes = document.querySelector(".characterEpsisodes");
var characterLocation = document.querySelector(".characterLocation");

var modalCardBody = document.querySelector(".modal-card-body");


// I can't get the data to display on the screen.. the class is modal-card-body

    fetch(endPoint)
    // console.log(character);
    .then(function(response) {
        // console.log("resolved", response)
        return response.json();
    }).then(function(data) {
        for (var i = 0; i < 20; i++) {
        character = data.results[i];
        console.log(character)
        return character;
    }})
    .catch(function(error) {
        console.log("rejected", error)
    })

// console.log(endPoint)



$("button").on("click", function(){
    modalCardBody.textContent = character.name;
    console.log(character)
    modal.classList.add("is-active")
});



// don't know how to do this- nevermind!!!
$(".deleteBtn").on("click", function(){
    modal.classList.remove("is-active")
});







// function getSchwifty(data) {

//     var currentrickAndMortyCharacter;
//     fetch(endPoint)
//     console.log(data)
//         .then((info)=> data.json())

// }

// getSchwifty():