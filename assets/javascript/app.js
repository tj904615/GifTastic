var topics = ["Dodge", "Chevy", "Cadillac", "Mercedes"];

function displayGiphyInfo() {

    var giphy = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + giphy +"&api_key=bLvye9ffw8F11r90hnFtIPsEAIq7NfO7&limit=7";
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

            var imgURL = response.data[i].images.fixed_height_still.url;
            console.log(imgURL);
            var image = $("<img>").attr("src", imgURL);
            image.attr("class", "giphy");
            image.attr("data-state", "still");
            image.attr("data-still",response.data[i].images.fixed_height_still.url);
            image.attr("data-animate", response.data[i].images.fixed_height.url);
            giphyDiv.append(image);

            $("#giphy-view").prepend(giphyDiv);
        }
    });
} 

function renderButtons() {
    $("#car-view").empty();
    for (var i = 0; i < topics.length; i++) {
        var btn = $("<button>");
        btn.addClass("car");
        btn.attr("data-name", topics[i]);
        btn.text(topics[i]);
        $("#car-view").append(btn);
    }
};

$("#add-car").on("click", function(event){
    event.preventDefault();
    console.log($("#car-input").val());

    var userInput = $("#car-input").val().trim();

    console.log("Current: " + topics);
    topics.push(userInput);
    console.log("New Array: " + topics);

    renderButtons();
});

$(document).on("click", ".car", displayGiphyInfo);
renderButtons();

$("#giphy-view").on("click", "img", function (event) {
    console.log("click");
    
    console.log($(this));
    var state = $(this).attr("data-state");
    console.log("this is my current state" + state);
    if (state === "still"){
        console.log($(this).attr("data-animate"));
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else{
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});
