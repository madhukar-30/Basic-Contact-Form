// Get form elements
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const consent = document.getElementById('consent');
const queryType = document.querySelectorAll('input[name="query"]');

// Get error messages
const firstNameError = document.querySelector('.first-name-error');
const lastNameError = document.querySelector('.second-name-error');
const emailError = document.querySelector('.email-error');
const queryError = document.querySelector('.query-error');
const messageError = document.querySelector('.message-error');
const consentError = document.querySelector('.contact-error span');
function toggleRadio(selectedRadio) {
    // Get all radio containers
    const containers = document.querySelectorAll('.ge, .sr');
    
    // Remove highlight class from all containers
    containers.forEach(container => container.classList.remove('highlight'));
    
    // Highlight the container of the selected radio button
    const parentDiv = selectedRadio.parentElement;
    parentDiv.classList.add('highlight');
}

// Validation functions
function validateFirstName() {
    if (firstName.value.trim() === "") {
        firstNameError.style.display = "inline";
        firstName.classList.add("error-border");
        return false;
    } else {
        firstNameError.style.display = "none";
        firstName.classList.remove("error-border");
        return true;
    }
}

function validateLastName() {
    if (lastName.value.trim() === "") {
        lastNameError.style.display = "inline";
        lastName.classList.add("error-border");
        return false;
    } else {
        lastNameError.style.display = "none";
        lastName.classList.remove("error-border");
        return true;
    }
}

function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        emailError.style.display = "inline";
        email.classList.add("error-border");
        return false;
    } else {
        emailError.style.display = "none";
        email.classList.remove("error-border");
        return true;
    }
}

function validateMessage() {
    if (message.value.trim() === "") {
        messageError.style.display = "inline";
        message.classList.add("error-border");
        return false;
    } else {
        messageError.style.display = "none";
        message.classList.remove("error-border");
        return true;
    }
}




function validateQuery() {
    const queryTypeChecked = document.querySelector('input[name="query"]:checked');
    if (!queryTypeChecked) {
        queryError.style.display = "inline";
        return false;
    } else {
        queryError.style.display = "none";
        return true;
    }
}



function validateConsent() {
    if (!consent.checked) {
        consentError.style.display = "inline";
        return false;
    } else {
        consentError.style.display = "none";
        return true;
    }
}

// Form validation
function formValidation() {
    const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const isEmailValid = validateEmail();
    const isQueryValid = validateQuery();
    const isMessageValid = validateMessage();
    const isConsentValid = validateConsent();

    return isFirstNameValid && isLastNameValid && isEmailValid && isQueryValid && isMessageValid && isConsentValid;
}

// Add real-time validation listeners
firstName.addEventListener('input', validateFirstName);
lastName.addEventListener('input', validateLastName);
email.addEventListener('input', validateEmail);
message.addEventListener('input', validateMessage);
consent.addEventListener('change', validateConsent);
queryType.forEach(radio => radio.addEventListener('change', validateQuery));

// Attach event listener to the faorm
document.getElementById('contactForm').addEventListener("submit", function(e) {
    e.preventDefault(); 

    if (!formValidation()) {
        return; 
    }

   
    let success = document.querySelector('.message-sent');
    success.style.display = "block";


    setTimeout(() => {
        success.style.display = "none";
       
        document.getElementById('contactForm').submit();
        document.getElementById('contactForm').reset();
    }, 1000); 
});