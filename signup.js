document.getElementById("signup-btn").addEventListener("click", () => {
    console.log("clicked");

    let namepattern = /^[A-Za-z][A-Za-z ]*$/g
    let emailpattern = /[a-zA-z\d]+@+[a-z]+.+[a-z]{2,3}/g
    let passwordpattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g


    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    let namematch = name.match(namepattern);
    let emailmatch = email.match(emailpattern);
    let passmatch = pass.match(passwordpattern);

    if (namematch && emailmatch && passmatch) {
        console.log("correct");
        document.getElementById("nameerror").innerText = ""
        document.getElementById("emailerror").innerText = ""
        document.getElementById("passerror").innerText = ""

        document.getElementById("msg").innerText = ""
        window.location.href = "index.html"
    }
    // if name is incorrect 
    else if (!namematch && emailmatch && passmatch) {
        document.getElementById("nameerror").innerText = "Must start with a letter"
        document.getElementById("emailerror").innerText = ""
        document.getElementById("passerror").innerText = ""

        document.getElementById("msg").innerText = ""
    }
    // if name & email is incorrect 
    else if (!namematch && !emailmatch && passmatch) {
        document.getElementById("nameerror").innerText = "Must start with a letter"
        document.getElementById("emailerror").innerText = "Incorrect Email"
        document.getElementById("passerror").innerText = ""

        document.getElementById("msg").innerText = ""
    }
    // if name & Password is incorrect 
    else if (!namematch && emailmatch && !passmatch) {
        document.getElementById("nameerror").innerText = "Must start with a letter"
        document.getElementById("emailerror").innerText = ""
        document.getElementById("passerror").innerText = "minimum 8 Character with a num & letter"

        document.getElementById("msg").innerText = ""
    }



    // if email is incorrect 
    else if (namematch && !emailmatch && passmatch) {
        document.getElementById("nameerror").innerText = ""
        document.getElementById("emailerror").innerText = "Incorrect Email"
        document.getElementById("passerror").innerText = ""

        document.getElementById("msg").innerText = ""
    }

    // if email & name is incorrect 
    else if (!namematch && !emailmatch && passmatch) {
        document.getElementById("nameerror").innerText = "Must start with a letter"
        document.getElementById("emailerror").innerText = "Incorrect Email"
        document.getElementById("passerror").innerText = ""

        document.getElementById("msg").innerText = ""
    }

    // if email & password is incorrect 
    else if (namematch && !emailmatch && !passmatch) {
        document.getElementById("nameerror").innerText = ""
        document.getElementById("emailerror").innerText = "Incorrect Email"
        document.getElementById("passerror").innerText = "minimum 8 Character with a num & letter"

        document.getElementById("cnicerror").innerText = ""
        document.getElementById("msg").innerText = ""
    }


    // if password is incorrect 
    else if (namematch && emailmatch && !passmatch) {
        document.getElementById("nameerror").innerText = ""
        document.getElementById("emailerror").innerText = ""
        document.getElementById("passerror").innerText = "minimum 8 Character with a num & letter"

        document.getElementById("msg").innerText = ""
    }
    // if password & name is incorrect 
    else if (!namematch && emailmatch && !passmatch) {
        document.getElementById("nameerror").innerText = "Must start with a letter"
        document.getElementById("emailerror").innerText = ""
        document.getElementById("passerror").innerText = "minimum 8 Character with a num & letter"

        document.getElementById("msg").innerText = ""
    }

    // if password & Email is incorrect 
    else if (namematch && !emailmatch && !passmatch) {
        document.getElementById("nameerror").innerText = ""
        document.getElementById("emailerror").innerText = "Incorrect mail"
        document.getElementById("passerror").innerText = "minimum 8 Character with a num & letter"

        document.getElementById("msg").innerText = ""
    }


    else if (name == "" && email == "" && pass == "") {
        document.getElementById("msg").innerText = "please fill out this fields"
    }
    
    else if (!namematch && !emailmatch && !passmatch) {
        document.getElementById("msg").innerText = "Invalid Fields"
        document.getElementById("nameerror").innerText = ""
        document.getElementById("emailerror").innerText = ""
        document.getElementById("passerror").innerText = ""

    }
    else {
        alert("Invalid Fields Plz Enter Valid Fields");
        document.getElementById("nameerror").innerText = ""
        document.getElementById("emailerror").innerText = ""
        document.getElementById("passerror").innerText = ""

        document.getElementById("msg").innerText = ""
    }
})