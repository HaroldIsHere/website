var attempt = 0;

function logIn() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password1").value;

    if (username == "fritzbautista100@gmail.com" && password == "bautista") {
        window.location.href = "index.html";
        return true;
    } else {
        attempt++
        if(attempt == 3) {
            alert("Cannot login. Attempts exceeded!");
            document.getElementById("btn_login").disabled = true;
            document.getElementById("username").disabled = true;
            document.getElementById("password1").disabled = true;
            document.getElementById("username").value = null;
            document.getElementById("password1").value = null;
            return false;
        } else {
            alert("incorrect username or password.");
            return false;
        }
    }
}

const element = document.getElementById('hlImg')

function changeImage() {
    document.getElementById("hlImg").src="img/samsung.png"
    element.classList.remove('hlImg1'); // reset animation
    void element.offsetWidth; // trigger reflow
    element.classList.add('hlImg1'); // start animation
}

function changeImage2() {
    document.getElementById("hlImg").src="img/2.png"
    element.classList.remove('hlImg1'); // reset animation
    void element.offsetWidth; // trigger reflow
    element.classList.add('hlImg1'); // start animation
}


