const apiKey = "J4YxAk7V7IkENzYoTQHYFTXS9K1Pfdscu6qhXw2T";

function apiStarter() {
    startApi();
    marsApi();
}
async function startApi() {
    let x = await fetch("https://api.nasa.gov/planetary/apod?api_key=" + apiKey);
    let y = await x.json();
    console.log(y)
    apiInfo(y);
}
const apiInfo = function (y) {
    document.querySelector("#pictureTitle").innerHTML += y.title;
    document.querySelector("#nasaImage").innerHTML += `<img src="${y.url}" class="image" alt="image"/> <br/>`;
    document.querySelector("#nasaDescription").innerHTML += y.explanation;
    document.querySelector("#pictureDate").innerHTML += y.date;
}

async function marsApi() {
    let x = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=" + apiKey)
    let y = await x.json();
    console.log(y);
    apiDisplayer(y);
}

const apiDisplayer = function (y) {
    for (var i = 0; i < 1000; i += 50) {
        // var x = document.createElement("div");
        // var n = document.createTextNode(y.photos[i].earth_date); 
        // x.appendChild(n);
        // document.querySelector(".marsinfo").appendChild(x);
        // var a = document.createElement("div");
        // var b = document.createTextNode(y.photos[i].earth_date); 
        // a.appendChild(b);
        // document.querySelector(".marsinfo").appendChild();
        // var x = document.createElement("div");
        // var n = document.createTextNode(y.photos[i].earth_date); 
        // x.appendChild(n);
        // document.querySelector(".marsinfo").appendChild(x);
        var x = document.createElement("div");
        document.querySelector(".marsinfo").innerHTML += `
        <div class="marscard">
        <button onclick="likeButton()" id="btn1" class="btn"><i class="fas fa-heart"></i></button>
        <div class="title">
                <h2 id="pictureTitle">${y.photos[i].camera.full_name}</h2>
            </div>
            <div class="date center">
                <h2 id="pictureDate">${y.photos[i].earth_date}</h2>
            </div>
            <div class="image center">
                <img src="${y.photos[i].img_src}" class="image" alt="image">
            </div>
        <div>`
    }
}

var btn = document.querySelector(".btn");
function likeButton() {
    if (btn.style.color == "orange") {
        btn.style.color = "grey"
    }
    else{
        btn.style.color = "orange"
    }
}