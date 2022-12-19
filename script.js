// Vars:
var shoeName = 'Jordan 11 Cherry Red';
var shoeImage = 'https://media.discordapp.net/attachments/973673510016802816/1050221299554865314/920713_01.png?width=511&height=305';

document.getElementById("shoe-name").innerHTML = shoeName;
document.getElementById("image").src = shoeImage;

function recordData() {
    // Get the input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;


    // Print the input values to the console
    console.log("Name: " + name);
    console.log("Email: " + email);
  }
  
