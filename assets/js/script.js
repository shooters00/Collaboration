var searchBtnEl = document.getElementById("searchBtn");
var baseApiUrl = "https://www.loc.gov/";
var specApiUrl = "&fo=json";

//Take in city and get weather
function search(event) {
    event.preventDefault();
    console.log("Here");

    var text = document.querySelector(".searchText").textContent;
    var type = document.querySelector(".dropdown-menu").textContent;
    //text = "civil war";

    
    fetch(baseApiUrl + "maps/" + "?q=" + text + specApiUrl, {

    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
      }); */
} 

searchBtnEl.addEventListener("click", search);