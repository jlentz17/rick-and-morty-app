var characterButton = document.getElementById("characterButton");

var characterButton = document.getElementById("characterButton");

var characterButton = document.getElementById("characterButton");
var modal = document.querySelector(".modal");

var deleteBtn = document.querySelector(".deleteBtn");
$("button").on("click", function(){
    console.log(modal)
    modal.classList.add("is-active")
});



// don't know how to do this
$(".deleteBtn").on("click", function(){
    modal.classList.remove("is-active")
});







// function getSchwifty(data) {
//     var endPoint = `https://rickandmortyapi.com/api/character`
//     var currentrickAndMortyCharacter;
//     fetch(endPoint)
//     console.log(data)
//         .then((info)=> data.json())

// }

// getSchwifty();