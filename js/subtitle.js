function getRandomGreeting() {
  var greetings = [
    "Micheal Lutz Is WIERD",
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();
