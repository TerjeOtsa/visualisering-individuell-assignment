function showOptions() {
    document.getElementById("colorOptions").classList.toggle("show");
  }
  
  function setColor(color) {
    // code to set the color scheme based on the user's selection
  }
  function changeColorScheme() {
    var colorScheme = prompt("Choose a color scheme: 1. Blue 2. Green 3. Red 4. Yellow");
    var body = document.getElementsByTagName("body")[0];
    
    switch(colorScheme) {
      case "1":
        body.style.backgroundColor = "blue";
        break;
      case "2":
        body.style.backgroundColor = "green";
        break;
      case "3":
        body.style.backgroundColor = "red";
        break;
      case "4":
        body.style.backgroundColor = "yellow";
        break;
      default:
        alert("Invalid selection");
        break;
    }
  }