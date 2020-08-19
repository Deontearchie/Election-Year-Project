// Variables

var newsRepURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=republican&api-key=205xGLUKGrfIcFcy6H6O0cbxQeSaYjD6"
var newsDemURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=democrat&api-key=205xGLUKGrfIcFcy6H6O0cbxQeSaYjD6"


var repURL = "https://api.open.fec.gov/v1/candidate/P80001571/totals/?sort_null_only=false&election_full=true&per_page=20&sort_nulls_last=false&page=1&api_key=SbTfdk5bfFpPbr3yBI4DOHOfXwx9zfi9ACxN1iVg&sort=-cycle&sort_hide_null=false"
var demURL = "https://api.open.fec.gov/v1/candidate/P80000722/totals/?sort_null_only=false&election_full=true&per_page=20&sort_nulls_last=false&page=1&api_key=SbTfdk5bfFpPbr3yBI4DOHOfXwx9zfi9ACxN1iVg&sort=-cycle&sort_hide_null=false"



// Republican News API
$.ajax({
    url: newsRepURL,
    method: "GET"
}).then(function(response){

    // Pull article headline text which will act as links

    for(var i = 0; i<5; i++){
        console.log(response.response.docs[i].headline.main)

        var headline = response.response.docs[i].headline.main
        var url = response.response.docs[i].web_url

        // Code to create and append headline link
        var display = $("#articlesRep")
        var newLink = $("<a>")

        newLink.html(headline + "<br>")
        newLink.attr("href", url)
        display.append(newLink)
    }

    
})

// Democrat News API
$.ajax({
    url: newsDemURL,
    method: "GET"
}).then(function(response){

    // Pull article headline text which will act as links

    for(var i = 0; i<5; i++){
        console.log(response.response.docs[i].headline.main)

        var headline = response.response.docs[i].headline.main
        var url = response.response.docs[i].web_url

        // Code to create and append headline link
        var display = $("#articlesDem")
        var newLink = $("<a>")
        newLink.html(headline + "<br>")
        newLink.attr("href", url)
        display.append(newLink)
    }
    
})


// OpenFEC Rep API
$.ajax({
    url: repURL,
    method: "GET"
}).then(function(response){

    // Code to dislay monetary stats 

    var newDiv = $("<div>")

    newDiv.html("<h4>Total Money raised: $"+ response.results[1].receipts + "</h4><h4> Money spent: $" + response.results[1].disbursements+"</h4><h4> Money on Hand: $"+ response.results[1].last_cash_on_hand_end_period + "<h4>")

    $("#statsRep").append(newDiv)

})


// OpenFEC Dem API
$.ajax({
    url: demURL,
    method: "GET"
}).then(function(response){

    // Code to display monetary stats

    var newDiv = $("<div>")

    newDiv.html("<h4>Total Money raised: $"+ response.results[2].receipts + "</h4><h4> Money spent: $" + response.results[2].disbursements+"</h4><h4> Money on Hand: $"+ response.results[2].last_cash_on_hand_end_period + "<h4>")

    $("#statsDem").append(newDiv)
})

$("#learnMoreRep").on("click", function() {
    location.href = "republican.html";
})

$("#learnMoreDem").on("click", function() {
    location.href = "democrat.html";
})