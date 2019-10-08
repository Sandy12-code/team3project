$(document).ready(function() {


// test begin

    $("#search").keyup(function(e){     
        var str = $.trim( $(this).val() );
        if( str != "" ) {
          var regx = /^[A-Za-z]+$/;
          if (!regx.test(str)) {
            $("#searchComment").html("Letters only, no numbers");
          }
        }
        else {
            $("#searchComment").html("");
        }
    });

// test end

    // Event listener function that will trigger the AJAX call whenb the user clicks the submit button //
    $("#submit-button").on("click", function(event) {

        // event.preventDefault() prevents the submit button from trying to submit a form when clicked //
        event.preventDefault();

        // Initial variables for our two APIs with their respective keys and/or app IDs //
        var edamamKeyAPI = "9d5b06c6d10c6620183573ad18113312";
        var edamamId = "a2c8e6b6";
        var spoonacularKeyAPI = "7aaa8c8c6c4743e8abe149221960621c";
        
        // Variable that connects the user search input to complete the API query URL below //
        var recipeSearch = $("#search").val();

        // Variables for our API search query URLs //
        var edamamQueryURL = "https://api.edamam.com/search?q=" + recipeSearch + "&app_id=a2c8e6b6&app_key=9d5b06c6d10c6620183573ad18113312";
        var spoonQueryURL = "https://api.spoonacular.com/food/wine/pairing?food=" + recipeSearch + "&apiKey=7aaa8c8c6c4743e8abe149221960621c&number=10";

        // Function for AJAX call to retrieve Edamam recipe information //
        $.ajax({
            url: edamamQueryURL,
            method: "GET"
        }).then(function(response) {
        
            // Displaying recipe title //
            console.log(response.hits[5].recipe.label);
            $("#recipe-title-text").text(JSON.stringify(response.hits[5].recipe.label));

            // Displaying recipe image //
            console.log(response.hits[5].recipe.image);

            //var imgDiv = $("<div class='image'>");
            var imgURL = response.hits[5].recipe.image;
            var image = $("<img>").attr("src", imgURL);
            $("#recipe-card-image").append(image);

            // Displaying receipe calories //
            console.log(response.hits[5]);
            $("#calorie-card-text").text(JSON.stringify(response.hits[5].recipe.calories));

            // Displaying recipe health labels //
            console.log(response.hits[5].recipe.healthLabels);
            $("#healthLabels-card-text1").text(JSON.stringify(response.hits[5].recipe.healthLabels[0]));
            $("#healthLabels-card-text2").text(JSON.stringify(response.hits[5].recipe.healthLabels[1]));
            $("#healthLabels-card-text3").text(JSON.stringify(response.hits[5].recipe.healthLabels[2]));
            $("#healthLabels-card-text4").text(JSON.stringify(response.hits[5].recipe.healthLabels[3]));
            $("#healthLabels-card-text5").text(JSON.stringify(response.hits[5].recipe.healthLabels[4]));

            // Displaying recipe ingredient lines //
            console.log(response.hits[5].recipe.ingredientLines);
            $("#recipe-item1").text(JSON.stringify(response.hits[5].recipe.ingredientLines[0]));
            $("#recipe-item2").text(JSON.stringify(response.hits[5].recipe.ingredientLines[1]));
            $("#recipe-item3").text(JSON.stringify(response.hits[5].recipe.ingredientLines[2]));
            $("#recipe-item4").text(JSON.stringify(response.hits[5].recipe.ingredientLines[3]));
            $("#recipe-item5").text(JSON.stringify(response.hits[5].recipe.ingredientLines[4]));
            $("#recipe-item6").text(JSON.stringify(response.hits[5].recipe.ingredientLines[5]));

        
        });
        
        // Function for AJAX call to retrieve Spoonacular wine pairing information //
        $.ajax({
            url: spoonQueryURL,
            method: "GET"
        }).then(function(response) {
        
            // Displaying preferred wine pairings //
            console.log(response.pairedWines);
            $("#winecard-text1").text(JSON.stringify(response.pairedWines[0]));
            $("#winecard-text2").text(JSON.stringify(response.pairedWines[1]));
            $("#winecard-text3").text(JSON.stringify(response.pairedWines[2]));

        
        });

        

    });



});