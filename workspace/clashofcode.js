/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

cleanCityNames = [];
dirtyCityNames = [];


cleanCityNamesLCNS = [];
dirtyCityNamesLCNS = [];

var N = parseInt(readline());

for (var i = 0; i < N; i++) {
    var cityName = readline();
    cleanCityNames.push(cityName);
}

var M = parseInt(readline());

for (var i = 0; i < M; i++) {
    var uncleanedCityName = readline();
    dirtyCityNames.push(uncleanedCityName)
}

for(cleancity in cleanCityNames){
	cleanCityNamesLCNS.push(cleancity.toLowerCase())
}

for(dirtycity in dirtyCityNamesLCNS){
	dirtyCityNamesLCNS.push(dirtycity.toLowerCase())
}