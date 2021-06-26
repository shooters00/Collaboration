var searchBtnEl = document.querySelector('#searchBtn');
var baseApiUrl = "https://www.loc.gov/";

var specApiUrl = "?fo=json";

//Take in city and get weather
function search() {

    //var text = document.querySelector("searchText").textContent;
    //var type = document.querySelector("dropdown-menu").textContent;
    console.log("Here");

    /*fetch(baseApiUrl + "maps" + specApiUrl, {
        //units="imperial"
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
      }); */
} 

searchBtnEl.addEventListener("click", search);