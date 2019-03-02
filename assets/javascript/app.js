// create array for teams in variable topics

var top5 =[
    "Liverpool", "", "Man City", "Tottenham", "Arsenal", "Man United", "Men in Blazers"];

    $("button").on("click", function() {

        $("#teamGif").empty();
        var teams = $(this).attr("data-name");


        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + teams + "&api_key=ETmkYzIbqrIvp6FYgWeTjBM0gF1ypKkR&limit=10";
  
        // Performing an AJAX request with the queryURL
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          // After data comes back from the request
          .then(function(response) {
           
            var results = response.data;
  
            // Looping through each result item
            for (var i = 0; i < results.length; i++) {
  
              // Creating and storing a div tag
              var teamDiv = $("<div>");
              teamDiv.addClass("images");
  
              // Creating a paragraph tag with the result item's rating
              var p = $("<p>").html("Rating: " + results[i].rating);
  
              // Creating and storing an image tag
              var teamImage = $("<img>");
              
              
  
              // Setting the src attribute of the image to a property pulled off the result item and creating still and animate attribute for gifs.
            teamImage.attr("src", results[i].images.fixed_height_small.url);
            teamImage.attr("data-still", results[i].images.fixed_height_small_still.url);
            teamImage.attr("data-animate", results[i].images.fixed_height_small.url);
            teamImage.addClass("goal")


              // Appending the paragraph and image tag 
              teamDiv.append(p);
              teamDiv.append(teamImage);
  
              
             $("#teamGif").prepend(teamDiv);

            }
          });

          
        //How to get to work so theres no need to load more images as in the example???
        $(document).on("click", function() {
        var state = $(this).attr("data-state");
            if (state === "still") {
                $(this).attr("src", $(this).data("data-animate"));
               $(this).attr("data-state", "animate");
              } else {
                $(this).attr("src", $(this).data("data-still"));
                $(this).attr("data-state", "still");
              }
            
          });
            });

     
