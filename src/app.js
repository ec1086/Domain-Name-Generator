/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};
document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector("#name").innerHTML = domainName();
});

let pronoun = ["the", "that"];
let adj = ["big", "blue"];
let noun = ["baby", "car"];

function domainName() {
  let i = 0;
  let j = 0;
  let k = 0;

  let temp = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        temp += pronoun[i] + adj[j] + noun[k] + ".com <br>";
      }
    }
  }
  return temp;
  console.log("Names");
}
