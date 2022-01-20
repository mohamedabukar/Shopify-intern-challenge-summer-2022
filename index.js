const apiKey= "J4YxAk7V7IkENzYoTQHYFTXS9K1Pfdscu6qhXw2T";

function apiStarter(){
    startApi();
    marsApi();
}
async function startApi(){
    let x = await fetch("https://api.nasa.gov/planetary/apod?api_key=" + apiKey);
    let y = await x.json();
    console.log(y)
    apiInfo(y);
}
const apiInfo = function(y){
    document.querySelector("#pictureTitle").innerHTML += y.title;
    document.querySelector("#nasaImage").innerHTML += `<img src="${y.url}" class="image" alt="image"/> <br/>`;
    document.querySelector("#nasaDescription").innerHTML += y.explanation;
    document.querySelector("#pictureDate").innerHTML += y.date;
}

async function marsApi(){
    let x = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&api_key=" + apiKey)
    let y = await x.json();
    console.log(y);
    apiDisplayer(y);
}

const apiDisplayer = function(y){
    for (var i = 0; i < 6; i++) {
        var x = document.createElement("div");
        var n = document.createTextNode(y.photos[i].earth_date); 
        x.appendChild(n);
        document.querySelector(".marsinfo").appendChild(x)
    }
}
