var modal = document.querySelector(".modal");
var modalTwo = document.querySelector(".modalTwo");
var modalBg = document.querySelector(".modal-background")

var deleteBtn = document.querySelector(".deleteBtn");
var endPoint = `https://rickandmortyapi.com/api/character`;
var quoteApi = "http://loremricksum.com/api/?paragraphs=1&quotes=1"
var characterName = document.querySelector(".characterName");
var characterSpecies = document.querySelector(".characterSpecies");
var characterImage = document.querySelector(".characterImage");
var characterOrigin = document.querySelector(".characterOrigin");
var modalCardBody = document.querySelector(".modal-card-body");
var quoteEl = document.querySelector(".textQuote");
var charData = {};
var charDataArr = [];
var savedData = [];
var characterButton = document.querySelector("#characterButton")
var body = document.body;
var quoteMessage = "";

//generates a random integer between specified minimum and maximum
var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

//fetches API for random quotes
var getRandomQuote = function() {
  fetch(quoteApi)
  .then((response) => {
    return response.json();
  })
  .then((results) => {
    quoteMessage = results.data[0];
  })
  .catch((error) => {
    console.log("rejected", error);
  });

  return quoteMessage;
}

//set quote container text content to display quote
var setQuoteEl = function(quoteMessage) {
  quoteEl.textContent = quoteMessage;
}
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
};

// creates character object to be stored in local storage
var createCharDataObj = function (input) {
  var charDataObj = {
    name: input.name,
    species: input.species,
    origin: input.origin.name,
    image: input.image,
  };
  return charDataObj;
};

//function plays audio file when applied
function play() {
  var audio = document.getElementById("audio");
  audio.play();
}

//creates character card from local storage
var loadCharacterCard = function(savedData, i) {
        //create character card in Ricks gallery
        var containerEl = document.createElement("section")
        containerEl.classList.add("container")
        containerEl.id = "gallery-" + i;
    
        body.appendChild(containerEl);
  
        //create h2 element for character name
        var characterNameEl = document.createElement("h2")
        characterNameEl.classList.add("savedCharacterName")
        characterNameEl.textContent = "Name: " + savedData[i].name
    
        //create h2 element for character species
        var characterSpeciesEl = document.createElement("h2")
        characterSpeciesEl.classList.add("savedCharacterSpecies")
        characterSpeciesEl.textContent = "Species: " + savedData[i].species
    
        //create h2 element for character origin
        var characterOriginEl = document.createElement("h2")
        characterOriginEl.classList.add("savedCharacterOrigin")
        characterOriginEl.textContent = "Origin: " + savedData[i].origin;
    
        //create image element for character picture
        var characterImageEl = document.createElement("img")
        characterImageEl.classList.add("savedCharacterImage")
        characterImageEl.setAttribute("src", savedData[i].image)
    
        //append everything to section element
        containerEl.appendChild(characterNameEl)
        containerEl.appendChild(characterSpeciesEl)
        containerEl.appendChild(characterOriginEl)
        containerEl.appendChild(characterImageEl)
}

// saves chracter data to local storage
var saveToGallery = function () {
  charDataArr.push(charData);
  localStorage.setItem("charDataArr", JSON.stringify(charDataArr));
};

//loads character data from local storage
var loadFromGallery = function () {
  savedData = localStorage.getItem("charDataArr");
  
  // if there are no characters, set savedData to an empty array and return out of the function
  if (!savedData) {
    return false;
  }


  // parse into array of objects
  savedData = JSON.parse(savedData);

  // loop through savedData array
  for (var i = 0; i < savedData.length; i++) {
    //set id counter to iterate for each section element id that is created
    var idCounter = i;

    //load any previous section elements that have been created with the same id
    var prevGallery = document.getElementById("gallery-" + i);
    
    // if there is no previous galleries loaded with the same element id then create new elements
    if (!prevGallery) {
      //create character card in gallery of ricks
      loadCharacterCard(savedData, i);
    } 
    else {

      //if there is an element id that matches then remove it and replace it with the new one.
      prevGallery.remove();

      //create character card in Ricks gallery
      loadCharacterCard(savedData, i);
    }
  }
};

$("#saveRicks").on("click", function () {
  modal.classList.remove("is-active")
  saveToGallery();
});

//Get Schwifty button click function to show random character and traits/picture
$("#characterButton").on("click", function () {
  var character = randomCharacterSelector();
  charData = createCharDataObj(character);
  createCharacterCard(character);
  modal.classList.add("is-active");
  getRandomQuote();
});

//Get quotes button function calls getRandomQuote function and generates onto textarea
$("#quotesButton").on("click", function () {
  var quoteMessage = getRandomQuote();
  setQuoteEl(quoteMessage);
})

modalBg.addEventListener("click", function () {
  modal.classList.remove("is-active")
})

// don't know how to do this- nevermind!!!
$(".deleteBtn").on("click", function () {
  modal.classList.remove("is-active");
});

// $("#soundClipButton").on("click", function (play) {
//   function play() {
//     var audio = new Audio("/yes-maam.mp3");
//     audio.play();
//     console.log(audio.play());
//   }
// });

$("#galleryButton").on("click", function () {
  loadFromGallery();
});

$("#deleteRicks").on("click", function () {
  modal.classList.remove("is-active")
})