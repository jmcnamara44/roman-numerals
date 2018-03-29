var romanNumerals = ["I", "V", "X", "L", "C", "D", "M"];
var integers = [1, 5, 10, 50, 100, 500, 1000];

var numberToRoman = function(number) {
  for (var index = 0;index<integers.length;index +=1) {
    if (number === integers[index]) {
      return romanNumerals[index]
    } else {
      // alert("we're not there yet")
    }
  }
};


$(document).ready(function() {
  $("#roman-numerals").submit(function(event) {
    event.preventDefault();
    var roman = parseInt($("#number").val());
    var result = numberToRoman(roman);

    $("#result").text(result);







  })





})
