let error = document.querySelector("#error")

function setError(msg) {
    error.innerHTML = msg
}

function clearError() {
    setError("")
}

let ratingInput = document.querySelector("#ratingControl");
let ratingView = document.querySelector("#ratingView");
let emailControl = document.getElementById("emailControl");
let fullnameControl = document.getElementById("fullnameControl");

ratingInput.addEventListener("input", function (e) {
    ratingView.innerHTML = `(${e.target.value})`
    if (e.target.value >= 8) {
        setError("╰(*°▽°*)╯ Really, Thank you!")
    } else if (e.target.value > 5 && e.target.value <= 7) {
        setError("(●'◡'●) Aww, Thanks!")
    } else{
        setError("(ˉ﹃ˉ) Alright, I'll try better!")
    }
})

ratingInput.addEventListener("blur", () => {
    clearError()
})

// blur event on email control and set error when the value of email control is blank
emailControl.addEventListener("blur", () => {
    if (emailControl.value === "") {
        setError("Email is required")
    } else {
        clearError()
    }
})

// blur event on fullname control and set error when the value of fullname control is blank or lesser than 2 characters
fullnameControl.addEventListener("blur", () => {
    if (fullnameControl.value === "") {
        setError("Full name is required")
    } else if(fullnameControl.value.length < 2){
        setError("Your name's that short? Try again!")
    }
    else{
        clearError()
    }
})