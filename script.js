let emails = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form"); 


document.querySelector("#emailerror").style.display = "none";
document.querySelector("#passworderror").style.display = "none";
document.querySelector("#succesfull").style.display = "none";

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

    let emailans = emailregex.test(emails.value);
    let passwordans = passwordregex.test(password.value);

    console.log("Email Entered:", emails.value);
    console.log("Password Entered:", password.value);

    if (!emailans) {
        document.querySelector("#emailerror").textContent = "Your email was incorrect";
        document.querySelector("#emailerror").style.display = "block";
    } else {
        document.querySelector("#emailerror").style.display = "none";
    }

    if (!passwordans) {
        document.querySelector("#passworderror").textContent = "Your password was incorrect";
        document.querySelector("#passworderror").style.display = "block";
    } else {
        document.querySelector("#passworderror").style.display = "none";
    }

    if (emailans && passwordans) {
        document.querySelector("#succesfull").textContent = "Login successful!";
        document.querySelector("#succesfull").style.display = "block";
    } else {
        document.querySelector("#succesfull").style.display = "none";
    }
});