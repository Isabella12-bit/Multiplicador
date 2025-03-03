import { sumar, multiplicar } from "./sumador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const formSumar = document.querySelector("#sumar-form");
const formMultiplicar = document.querySelector("#multiplicar-form");
const div = document.querySelector("#resultado-div");

formSumar.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML += "<p>Suma: " + sumar(firstNumber, secondNumber) + "</p>"; 
});

formMultiplicar.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML += "<p>Multiplicación: " + multiplicar(firstNumber, secondNumber) + "</p>";
});
