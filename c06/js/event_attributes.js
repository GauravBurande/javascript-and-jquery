function checkUsername() {                                  // declare function
    var elmsg = document.getElementById('feedback')         // get feedback element
    var elUsername = document.getElementById('username');   // get username input
    if (elUsername.value.length<5) {                        // if username too short
        elmsg.textContent = 'username must be 5 characters or more!' // set msg        
    } else {
        elmsg.textContent = '';
    }
}



