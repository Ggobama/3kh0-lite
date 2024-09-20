function getRandomGreeting() {
  var greetings = [
    "Micheal Lutz Is <u id="myU">Wierd</u>",
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();
