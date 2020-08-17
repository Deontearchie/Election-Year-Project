var searchRep = "republican"
var searchDem = "democrat"

var queryURL1 = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ searchRep +"&api-key=205xGLUKGrfIcFcy6H6O0cbxQeSaYjD6"
var queryURL2 = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ searchDem +"&api-key=205xGLUKGrfIcFcy6H6O0cbxQeSaYjD6"


$.ajax({
    url: queryURL1,
    method: "GET"
}).then(function(response){

    console.log(response)

})

$.ajax({
    url: queryURL2,
    method: "GET"
}).then(function(response){

    console.log(response)
    
})





