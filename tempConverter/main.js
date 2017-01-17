function toCelsius () {

}

function toFahrenheit () {

}

// Get a reference to the button element in the DOM
var button = document.getElementById("submitButton");

var fRadio = document.getElementById("fahrenheit");
var cRadio = document.getElementById("celsius");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
	if(fRadio.checked){
		console.log("FAHRENHEIT CHECKED");
	}

	if(cRadio.checked){
		console.log("CELSIUS CHCKED");
	}
}

// Assign a function to be executed when the button is clicked

button.addEventListener("click", determineConverter);