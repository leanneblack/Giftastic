// create array for wild animals in variable topics

var topic =[
    "Sharks", "Parrots", "Tigers", "Wolves", "Sea Otters"];

    $("button").on("click", function() {

        var shark = $(this).attr("data-shark");

        // Constructing a queryURL using the animal name
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + "shark"  + "&api_key=ETmkYzIbqrIvp6FYgWeTjBM0gF1ypKkR&limit=10";
  
        // Performing an AJAX request with the queryURL
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          // After data comes back from the request
          .then(function(response) {
            console.log(queryURL);
  
            console.log(response);
            // storing the data from the AJAX request in the results variable
            var results = response.data;
  
            // Looping through each result item
            for (var i = 0; i < results.length; i++) {
  
              // Creating and storing a div tag
              var animalDiv = $("<div>");
  
              // Creating a paragraph tag with the result item's rating
              var p = $("<p>").text("Rating: " + results[i].rating);
  
              // Creating and storing an image tag
              var animalImage = $("<img>");
              // Setting the src attribute of the image to a property pulled off the result item
              animalImage.attr("src", results[i].images.fixed_height.url);
  
              // Appending the paragraph and image tag to the animalDiv
              animalDiv.append(p);
              animalDiv.append(animalImage);
  
              // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
              $("#sharkGif").prepend(animalDiv);
            }
          });
      });
   