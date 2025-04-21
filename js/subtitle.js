function getRandomGreeting() {
  var greetings = [
    ":)",

    
    
    
    
    
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();
