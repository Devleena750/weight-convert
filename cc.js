document.getElementById("output").style.visibility = "hidden";
document.getElementById("kgInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let kg = e.target.value;
  document.getElementById("gramsOutput").innerHTML = kg / (0.0022046*2.2046);
  document.getElementById("lbsOutput").innerHTML = kg * 2.2046;
  document.getElementById("ozOutput").innerHTML = kg * 2.2046 * 16;
});
