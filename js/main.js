const form = document.querySelector("#form");
const email = document.querySelector("#email");
const showSuccess = document.querySelector(".show-success");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const nav = document.querySelector(".nav-links");


hamburger.addEventListener('click', () => {
    hamburger.classList.add('hamburger-remove');
    close.classList.add('close-add');
    nav.classList.add('nav-show');
});

close.addEventListener('click', () => {
    hamburger.classList.remove('hamburger-remove');
    close.classList.remove('close-add');
    nav.classList.remove('nav-show');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
   verifyInputs();
});

verifyInputs  = () => {
    const emailValue = email.value.trim();

    if (emailValue === "") {
        setErrorFor(email, "mail Address can not be blank");
    }else if (emailValue.length < 5) {
        setErrorFor(email, "email can not be less than 5 characters");
    }else if (!isEmail(emailValue)) {
        setErrorFor(email, "invalid mail address");
    }else{
        showSuccess.innerHTML = `your email is <strong>${emailValue}</strong>`;
        setSuccess();
        $('.success-container').fadeOut(20000);
    }
}

setErrorFor = (input,message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
}

removeErro = (input) => {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
}

setSuccess = () => {
    $('.success-container').addClass('success-container-add');
}

$('.remove img').click(() => {
    $('.success-container').removeClass('success-container-add');
})

isEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}