function apiStarter(){
    startApi();
}
async function startApi(){
    let apiKey= "J4YxAk7V7IkENzYoTQHYFTXS9K1Pfdscu6qhXw2T";
    let x = await fetch("https://api.nasa.gov/planetary/apod?api_key=" + apiKey);
    let y = await x.json();
    console.log(y)
    apiInfo(y);
}
const apiInfo = function(y){
    document.querySelector("#pictureTitle").innerHTML += y.title;
    document.querySelector("#nasaImage").innerHTML += `<img src="${y.url}" class="image /> <br/>`;
    document.querySelector("#nasaDescription").innerHTML += y.explanation;
}