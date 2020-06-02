// challenge 1: your age in days
function ageInDays() {
  var birthYear = prompt("what year you were born in");
  var ageInDayss = (2020 - birthYear) * 365;
  var h1 = document.createElement("h1");
  var TextAnswer = document.createTextNode("youre" + ageInDayss + "days old");
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(TextAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}
function reset() {
  document.getElementById("ageInDays").remove();
}

function generatepussy(){
  var image = document.createElement("img");
  var div = document.getElementById("flex-pussy-gen");
  image.src="https://cdn2.thecatapi.com/images/1tj.jpg";
  div.appendChild(image);
}