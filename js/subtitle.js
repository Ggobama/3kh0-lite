function getRandomGreeting() {
  var greetings = [
    "Fortnite Is The Best Game",
    "Sigma Sigma On The Wall",
    "Who's the skibidiest of them all?",
    "Erm, What The Sigma",
    "W's In The chat",
    "Happy Early Birthday",
    "1 is fun",
    "You can't get ahead when you're chased by the dead",
    "I Love Red 40 Fridays",
    "Don't forget to play Magma Dash!",
    "Oh, back so soon I see",
    "Whats the time? Its OHIO time",
    "Gen alpha is cooked",

    
    
    
    
    
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();
