function milligrams() {
  let Kilograms = document.getElementById("weightInput").value;
  const milli = 1000000;
  const ans = Kilograms * milli;
  
  document.getElementById("display").innerHTML = ans;
  document.getElementById("displayUnit").innerHTML = "Milligrams";
  
}

function grams() {
  let Kilograms = document.getElementById("weightInput").value;
  const grams = 1000;
  const ans = Kilograms * grams;

  document.getElementById("display").innerHTML = ans;
  document.getElementById("displayUnit").innerHTML = "grams";
}
function pounds() {
  let Kilograms = document.getElementById("weightInput").value;
  const pounds = 2.20462;
  const ans = Kilograms * pounds;

  document.getElementById("display").innerHTML = ans;
  document.getElementById("displayUnit").innerHTML = "pounds";
}

