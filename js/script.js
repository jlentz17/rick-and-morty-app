var characterButton = document.getElementById("characterButton");


var modal = document.querySelector(".modal");

var deleteBtn = document.querySelector(".deleteBtn");

var endPoint = `https://rickandmortyapi.com/api/character`

var characterName = document.querySelector(".characterName");
console.log(characterName);
var characterEpisodes = document.querySelector(".characterEpsisodes");
var characterLocation = document.querySelector(".characterLocation");

var modalCardBody = document.querySelector(".modal-card-body");

// I can't get the data to display on the screen.. the class is modal-card-body

    fetch(endPoint)
    // console.log(character);
    .then((response) => {
        // console.log("resolved", response)
        return response.json()
    }).then((data) => {
        characterObj = data.results
    })
    .catch((error) => {
        console.log("rejected", error)
    })

var getRandomInt = function(min,max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

    
var randomCharacterSelector = function() {
    var i = getRandomInt(0,characterObj.length);
    var character = characterObj[i];
    return character;
}




$("button").on("click", function(){
    var character = randomCharacterSelector();
    modalCardBody.textContent = character.name;
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