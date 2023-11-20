function buildSmoothie() {
    // Get the form element
    var form = document.getElementById("smoothieForm");

    // Get selected size
    var size = form.querySelector('input[name="size"]:checked');

    // Get all checked checkboxes for ingredients
    var ingredients = form.querySelectorAll('input[name="apple"]:checked, input[name="banana"]:checked, input[name="strawberry"]:checked, input[name="blueberry"]:checked, input[name="raspberry"]:checked, input[name="cherry"]:checked, input[name="grapes"]:checked, input[name="pineapple"]:checked, input[name="orange"]:checked');

    // Get selected flavor boost
    var flavor = form.querySelector('input[name="flavor"]:checked');

    // Log the selected options to the console
    console.log("Selected Size:", size ? size.value : "N/A");
    console.log("Selected Ingredients:", Array.from(ingredients).map(ingredient => ingredient.getAttribute('data-name')));
    console.log("Selected Flavor:", flavor ? flavor.value : "N/A");

    // Build the smoothie based on selected options
    var smoothieOptions = {
        size: size ? size.value : "N/A",
        ingredients: Array.from(ingredients).map(ingredient => ingredient.getAttribute('data-name')),
        flavor: flavor ? flavor.value : "N/A"
    };

    // Display the result
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Your custom smoothie:<br>" +
        "Size: " + smoothieOptions.size + "<br>" +
        "Ingredients: " + (smoothieOptions.ingredients.length > 0 ? smoothieOptions.ingredients.join(', ') : "None") + "<br>" +
        "Flavor Boost: " + smoothieOptions.flavor;
}