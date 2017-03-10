// generate random number on game start b/t 19-120----console.log

// gnereate on-click for each crystal....console.log

// assign each crystal a random between 1-12.....console.log

//store number for each crystal by using #id....console.log

// display clicked value to user.....console.log

// add onkey click to add tp previous stored number (+=).....console.log

// set game parameters by using "if statements".......condolre.log

//creating random number between 19-20
var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
console.log(randomNumber);

// creating random number for each crystal
var diamond = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
$("#diamond").val(diamond);

var redRuby = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
$("#redRuby").val(redRuby);

var greenRuby = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
$("#greenRuby").val(greenRuby);

var yellowRuby = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
$("#yellowRuby").val(yellowRuby);

$("#diamond").on("click", function() {

})


// displaying random number to user
$("#randomNumber").html(randomNumber);