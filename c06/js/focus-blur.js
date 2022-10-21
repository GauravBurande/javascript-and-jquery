var el = document.getElementByld("username"); // Username input
var elMsg = document.getElementByid("feedback"); //Element to hold message

function checkUsername() {
  var el = document.getElementByld("username"); // Username input
  var username = el.value;
  var elMsg = document.getElementByid("feedback"); //Element to hold message
  // Declare function
  if (username.length < 5) {
    elMsg.textContent = "Not long enough,yet ... "; // Update message
  } else {
    elMsg.textContent = "";
  }
}

function tipUsername() {
  var elMsg = document.getElementByid("feedback"); //Element to hold message
  elMsg.innerHTML = "Username must be at least 5 characters "; // Add message
}

//When the username input ga ins / loses focus cal l functions above :
el.addEventlistener("focus", tipUsername, false); // focus call tipUsername()
el.addEventlistener("blur", checkUsername, false); // blur call checkUsername()
