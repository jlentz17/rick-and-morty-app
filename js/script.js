var characterButton = document.getElementById("characterButton");


var modal = document.querySelector(".modal");

var deleteBtn = document.querySelector(".deleteBtn");

var endPoint = `https://rickandmortyapi.com/api/character`

var characterName = document.querySelector(".characterName");
var characterEpisodes = document.querySelector(".characterEpsisodes");
var characterLocation = document.querySelector(".characterLocation");

var modalCardBody = document.querySelector(".modal-card-body");


// I can't get the data to display on the screen.. the class is modal-card-body

for (var i = 0; i < 20; i++){
    fetch(endPoint)
    // console.log(character);
    .then(function(response) {
        // console.log("resolved", response)
        return response.json();
    }).then(function(data) {
        var character = data.results[i]
        return character;
    })
    .catch(function(error) {
        console.log("rejected", error)
    })

    function addRickAndMortyChar(character) {
        modalCardBody.textContent = data.results[i];
        console.log(character)
    }

// console.log(endPoint)



$("button").on("click", function(){
    console.log(modal)
    modal.classList.add("is-active")
});



// don't know how to do this- nevermind!!!
$(".deleteBtn").on("click", function(){
    modal.classList.remove("is-active")
});
};







// function getSchwifty(data) {

//     var currentrickAndMortyCharacter;
//     fetch(endPoint)
//     console.log(data)
//         .then((info)=> data.json())

// }

// getSchwifty():