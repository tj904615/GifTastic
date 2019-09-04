var topics = ["Dodge", "Chevy", "Cadillac", "Mercedes"];

function displayGiphyInfo() {

    var giphy = $(this).attr("data-name");

    var queryURL = 
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function(response) {

        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            var giphyDiv = $("<div>");
            var rating1 = response.data[i].rating;
            var pOne = $("<p>").text("Rating: " + rating1);
            giphyDiv.append(pOne);

            var imgURL
        }
    })
} 