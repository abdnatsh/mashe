const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
let cards;
let interval;
let firstcard = false;
let secondcard = false;
//Items array
const items = [
  { name: "bee", image: "bee.jfif" },
  { name: "crocodile", image: "crocodile.jfif" },
  { name: "macaw", image: "macaw.jfif" },
  { name: "gorilla", image: "gorilla.jfif" },
  { name: "tiger", image: "tiger.jfif" },
  { name: "monkey", image: "monkey.jfif" },
  { name: "chameleon", image: "chameleon.jfif" },
  { name: "piranha", image: "piranha.jfif" },
  { name: "anaconda", image: "anaconda.jfif" },
  { name: "sloth", image: "sloth.jfif" },
  { name: "cockatoo", image: "cockatoo.jfif" },
  { name: "adam", image: "adam.jpg" },
];
