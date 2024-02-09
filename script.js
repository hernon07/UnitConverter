/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const userInput = document.getElementById("user-input");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");

const btn = document.getElementById("convert");

//metric to imperial

function meterToFeet() {
  return (userInput.value * 3.281).toFixed(3);
}
function literToGalon() {
  return (userInput.value * 0.264).toFixed(3);
}
function kilogramToPound() {
  return (userInput.value * 2.204).toFixed(3);
}

//imperial to metric

function feetToMeter() {
  return (userInput.value / 3.281).toFixed(3);
}
function galonToLiter() {
  return (userInput.value / 0.264).toFixed(3);
}
function poundToKilogram() {
  return (userInput.value / 2.204).toFixed(3);
}

function render() {
  length.innerHTML = `${userInput.value} meters = ${meterToFeet(
    userInput
  )} feet | ${userInput.value} feet = ${feetToMeter(userInput)} `;

  volume.innerHTML = `${userInput.value} liters = ${literToGalon(
    userInput
  )} gallons | ${userInput.value} gallons = ${galonToLiter(userInput)} `;

  mass.innerHTML = `${userInput.value} kilos = ${kilogramToPound(
    userInput
  )} pounds | ${userInput.value} pounds = ${poundToKilogram(userInput)} kilos `;
}

btn.addEventListener("click", function () {
  render();
});
