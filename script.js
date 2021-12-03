var jsonOb;
// Esimerkki request
var link = "https:/rata.digitraffic.fi/api/v1/live-trains/station/HKI?minutes_before_departure=15&minutes_after_departure=15&minutes_before_arrival=15&minutes_after_arrival=15&train_categories=Commuter";

//perus runko AJAX requestien käyttöön
let url = "https://rata.digitraffic.fi/api/v2/graphql/graphql";
fetch(url)
	.then((response) => {
	return response.text();
	})
	.then((data) => {
        // tarkistetaan AJAX-requesti
        console.log(data);
        // data muutetaan
	    let json = JSON.parse(data);
        // ja kirjataan ylös parsittu versio
        console.log(data)
});


// tänne koodi? Mikan ratkaisu vai joku muu toteutus?
function print (jsonOb) {


}

function dwnldJSOND(station){
    var asema = station;
    var xhttp = new XMLHttpRequest();
    var url = "https://rata.digitraffic.fi/api/v2/graphql/graphql"
        if (this.readyState == 4 && this.Status == 200){
            jsonObj = JSON.parse(xhttp.responseText);
            console.log(jsonObj);
            printJSONTable(jsonObj);
        } else if (this.reasdyState == 4 && this.status == 404) {
            alert("Station not found");
            return;
        }
    xhttp.open("GET",url,true)
    xhttp.send();
}

//Kootaan tuloste
function printJSONT(jsonOb){
    var data = jsonOb;
    var taulukko = "<table><tr><th>Asema</th><th>Lämpötila</th><th>Tuuli</th></tr></table>"
    var muuttuja3 = data.x.x

    var tuloste = "<table><tr>";
        tuloste += "<td>" + data.x.x + "</td>";
        tuloste += "<td>" + data.x.x + "</td>";
        tuloste += "<td>" + data.x.x + "</td>";
        tuloste += "<td>" + data.x.x + "</td>";
    tuloste += "</tr></table>";

    taulukko += "<tr><td>" + nimi + "</td><td>" 
                + lämpötila + "</td><td>" 
                + muuttuja3 + "</td></tr>" 
                + "</table>";
    
    if (nimi = "Helsinki"){
        document.getElementById("asemadata").innerHTML = taulukko;
    } else {
        document.getElemnetById("asemadata").innerHTML = taulukko;
        }
    
}

// Implement a web page, 
// where the user can select a trainstation 
// and get the current timetables etc.
// info concerning that station

