var button = document.querySelector("button");
var modal = document.querySelector("page-modal");
// don't know how to do this
$("button").on("click", function(){
    modal.style.display = "block"
});




function getSchwifty(data) {
    var endPoint = `https://rickandmortyapi.com/api/character`
    var currentrickAndMortyCharacter;
    fetch(endPoint)
    console.log(data)
        .then((info)=> data.json())

}

getSchwifty();