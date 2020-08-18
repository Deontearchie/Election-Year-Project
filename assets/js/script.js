// Variables

var newsRepURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=republican&api-key=205xGLUKGrfIcFcy6H6O0cbxQeSaYjD6"
var newsDemURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=democrat&api-key=205xGLUKGrfIcFcy6H6O0cbxQeSaYjD6"

var repURL = "https://api.open.fec.gov/v1/candidate/P80001571/totals/?sort_null_only=false&election_full=true&per_page=20&sort_nulls_last=false&page=1&api_key=maOo0oij50PHxFc0tYqHrMLoq2IWpO8idgJz07uf&sort=-cycle&sort_hide_null=false"
var demURL = "https://api.open.fec.gov/v1/candidate/P80000722/totals/?sort_null_only=false&election_full=true&per_page=20&sort_nulls_last=false&page=1&api_key=maOo0oij50PHxFc0tYqHrMLoq2IWpO8idgJz07uf&sort=-cycle&sort_hide_null=false"


// Republican News API
$.ajax({
    url: newsRepURL,
    method: "GET"
}).then(function(response){

    console.log(response)

    // Pull article headline text which will act as links
    for(var i = 0; i<5; i++)
    console.log(response.response.docs[i].headline.main)
})

// Democrat News API
$.ajax({
    url: newsDemURL,
    method: "GET"
}).then(function(response){

    console.log(response)

    // Pull article headline text which will act as links
    for(var i = 0; i<5; i++)
    console.log(response.response.docs[i].headline.main)
    
})

// OpenFEC Rep API
$.ajax({
    url: repURL,
    method: "GET"
}).then(function(response){

    console.log(response)
    console.log(response.results[1].receipts)
    console.log(response.results[1].disbursements)
    console.log(response.results[1].last_cash_on_hand_end_period) 
})

// OpenFEC Dem API
$.ajax({
    url: demURL,
    method: "GET"
}).then(function(response){

    console.log(response)
    console.log(response.results[2].receipts)
    console.log(response.results[2].disbursements)
    console.log(response.results[2].last_cash_on_hand_end_period)
})






