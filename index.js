const firstName = document.querySelectorAll("input")[0];
const lastName = document.querySelectorAll("input")[1];
const emailAddress = document.querySelectorAll("input")[2];
const password = document.querySelectorAll("input")[3];
const errorIcons = document.getElementsByClassName("input__erroricon")
const submitButton = document.querySelector("button");

submitButton.addEventListener("click",  function(){
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (firstName.value === '') {
        document.getElementsByClassName("input__validationtext")[0].innerHTML="First Name cannot be empty";
        document.getElementsByClassName("input__erroricon")[0].style.visibility = "visible";
        document.querySelectorAll("input")[0].style.border = "2px solid red"

    }
    
    if (lastName.value === "") {
        document.getElementsByClassName("input__validationtext")[1].innerHTML="Last Name cannot be empty";
        document.getElementsByClassName("input__erroricon")[1].style.visibility = "visible";
        document.querySelectorAll("input")[1].style.border = "2px solid red"
    } 
    
    if (emailAddress.value === "") {
        document.getElementsByClassName("input__validationtext")[2].innerHTML="Email Address cannot be empty";
        document.getElementsByClassName("input__erroricon")[2].style.visibility = "visible";
        document.querySelectorAll("input")[2].style.border = "2px solid red";

    } 
    if (password.value === ""){
        document.getElementsByClassName("input__validationtext")[3].innerHTML="Password cannot be empty";
        document.getElementsByClassName("input__erroricon")[3].style.visibility = "visible";
        document.querySelectorAll("input")[3].style.border = "2px solid red"
    }

    if (emailAddress.value !== "" && !emailAddress.value.match(emailFormat)) {
        document.getElementsByClassName("input__validationtext")[2].innerHTML="Looks like this is not an email";
        document.getElementsByClassName("input__erroricon")[2].style.visibility = "visible";
        document.querySelectorAll("input")[2].style.border = "2px solid red";
    }

    else {
        firstName.value = "";
        lastName.value = "";
        emailAddress.value = "";
        password.value = "";

       /* Array.from(errorIcons).forEach(icon => {icon.style.visibility="hidden"}); */
    }

 


})
