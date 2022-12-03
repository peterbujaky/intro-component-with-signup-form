const firstName = document.querySelectorAll("input")[0];
const lastName = document.querySelectorAll("input")[1];
const emailAddress = document.querySelectorAll("input")[2];
const password = document.querySelectorAll("input")[3];
const errorIcons = document.getElementsByClassName("input__erroricon");
const inputFields = document.getElementsByClassName("input__field");
const validationTexts = document.getElementsByClassName("input__validationtext");
const submitButton = document.querySelector("button");



submitButton.addEventListener("click",  function(){
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (firstName.value === '') {
        validationTexts[0].style.visibility = "visible";
        validationTexts[0].innerHTML="First Name cannot be empty";
        errorIcons[0].style.visibility = "visible";
        inputFields[0].style.border = "2px solid red"
    } else { firstName.style.border="0.05rem double rgba(215, 215, 215, 0.907)"
             errorIcons[0].style.visibility = "hidden"
             validationTexts[0].style.visibility = "hidden";
             }
    
    if (lastName.value === "") {
        validationTexts[1].style.visibility = "visible";
        validationTexts[1].innerHTML="Last Name cannot be empty";
        errorIcons[1].style.visibility = "visible";
        inputFields[1].style.border = "2px solid red"
    }  else {lastName.style.border="0.05rem double rgba(215, 215, 215, 0.907)"
             errorIcons[1].style.visibility = "hidden"
             validationTexts[1].style.visibility = "hidden";
             }
    
    if (emailAddress.value === "") {
        validationTexts[2].style.visibility = "visible";
        validationTexts[2].innerHTML="Email Address cannot be empty";
        errorIcons[2].style.visibility = "visible";
        inputFields[2].style.border = "2px solid red";
    } else if(emailAddress.value !=="" && !emailAddress.value.match(emailFormat)) {
        validationTexts[2].style.visibility = "visible";
        validationTexts[2].innerHTML="Looks like this is not an email";
        errorIcons[2].style.visibility = "visible";
        inputFields[2].style.border = "2px solid red";
    } else if (emailAddress.value !=="" && emailAddress.value.match(emailFormat)) {
                emailAddress.style.border="0.05rem double rgba(215, 215, 215, 0.907)"
                errorIcons[2].style.visibility = "hidden"
                validationTexts[2].style.visibility = "hidden";
    }
    
    if (password.value === ""){
        validationTexts[3].innerHTML="Password cannot be empty";
        validationTexts[3].style.visibility = "visible";
        errorIcons[3].style.visibility = "visible";
        inputFields[3].style.border = "2px solid red"
    } else {password.style.border="0.05rem double rgba(215, 215, 215, 0.907)"
            errorIcons[3].style.visibility = "hidden"
            validationTexts[3].style.visibility = "hidden";
            }

    if (firstName.value !== "" && lastName.value !=="" && emailAddress.value !=="" && emailAddress.value.match(emailFormat) && password.value !== "") {
        firstName.value = "";
        lastName.value = "";
        emailAddress.value = "";
        password.value = "";

        validationTexts[0].innerHTML="";
        validationTexts[1].innerHTML="";
        validationTexts[2].innerHTML="";
        validationTexts[3].innerHTML="";
        
    }

})

