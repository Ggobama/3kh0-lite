function getRandomGreeting() {
  var greetings = [
    "Micheal Alexander Lutz Is WEIRD",
    "Fortnite Is The Best Game",
    
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();
