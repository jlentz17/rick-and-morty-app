var modal = document.querySelector(".modal");
var modalTwo = document.querySelector(".modalTwo");

var deleteBtn = document.querySelector(".deleteBtn");
var endPoint = `https://rickandmortyapi.com/api/character`;
var characterName = document.querySelector(".characterName");
var characterSpecies = document.querySelector(".characterSpecies");
var characterImage = document.querySelector(".characterImage");
var characterOrigin = document.querySelector(".characterOrigin");
var modalCardBody = document.querySelector(".modal-card-body");

//generates a random integer between specified minimum and maximum
var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
// Fetches API data for each character and is stored in characterObj when called in the randomCharacterSelector
var randomPage = getRandomInt(1, 34);
fetch(endPoint + "?page=" + randomPage)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    characterObj = data.results;
  })
  .catch((error) => {
    console.log("rejected", error);
  });

//Generates random character from character object
var randomCharacterSelector = function () {
  var i = getRandomInt(0, characterObj.length);
  var character = characterObj[i];
  console.log(characterObj);
  return character;
};

//Generates character card when called in button
var createCharacterCard = function (input) {
    //create text for name of character
    characterName.textContent = "Name: " + input.name;
    
    //create text for name of species
    characterSpecies.textContent = "Species: " + input.species;
    
    characterOrigin.textContent = "Origin: " + input.origin.name;
    //create image element for character and append to modal card body
    characterImage.setAttribute("src", input.image);
    modalCardBody.appendChild(characterImage);
    
    modal.classList.add("is-active");
    
    var saveData = createCharDataObj(input);
};
function play() {
    var audio = document.getElementById("audio");
    audio.play();
}
var createCharDataObj = function (input) {
    var charDataObj = {
        name: input.name,
        species: input.species,
        origin: input.origin,
        image: input.image
    }
    return charDataObj;
}



$("#saveRicks").on("click", function(){
    localStorage.setItem("saveData", saveData)
      saveToGallery(saveData);
})

//Get Schwifty button click function to show random character and traits/picture
$("#characterButton").on("click", function () {
  var character = randomCharacterSelector();
  createCharacterCard(character);
});

// don't know how to do this- nevermind!!!
$(".deleteBtn").on("click", function () {
  modal.classList.remove("is-active");
});

$("#soundClipButton").on("click", function (play) {
  function play() {
    var audio = new Audio("/im-mr.mp3");
    audio.play();
    console.log(audio.play());
  }
});

$("#galleryButton").on("click", function () {
  modal.classList.add("is-active");
});

// function getSchwifty(data) {

//     var currentrickAndMortyCharacter;
//     fetch(endPoint)
//     console.log(data)
//         .then((info)=> data.json())

// }

// getSchwifty():
