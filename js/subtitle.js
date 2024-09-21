function getRandomGreeting() {
  var greetings = [
    "Micheal Alexander Lutz Is WEIRD",
    "Fortnite Is The Best Game",
    "Sigma Sigma On The Wall",
    "Who's the skibidiest of them all?",
    "Erm, What The Sigma",
    "W's in the chat",
    "Happy Early Birthday!",
    
    
    
    
    
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();
