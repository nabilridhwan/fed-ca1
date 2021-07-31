var yearSpan = document.getElementById("yearSpan")
var ageSpan = document.getElementById("ageSpan")
// Get element of id main-header-h1
var mainHeaderH1 = document.getElementById("main-header-h1")
// Get element id of nav-brand
var navBrand = document.getElementById("nav-brand")
var gradientMode = false
var gradientModeInterval;


// set yearSpan inner HTML to current year
yearSpan.innerHTML = new Date().getFullYear()

// calculate the years between today and the target year
var age = new Date().getFullYear() - 2003
// set the age span to the number of years
ageSpan.innerHTML = age

// change color to gradient that changes every second
var colors = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#9e9e9e", "#607d8b"]
var i = 0

function changeGradient() {
    document.body.style.backgroundColor = colors[i]
    i = (i + 1) % colors.length
}

// Add click event listener to navBrand
navBrand.addEventListener("click", function () {
    gradientMode = !gradientMode

    if (gradientMode) {
        gradientModeInterval = setInterval(changeGradient, 1000)
    } else {
        clearInterval(gradientModeInterval)
        document.body.style.backgroundColor = "white"
    }
})

// The quotes variable refer to static/js/quotes.js
// Apply the quote to the p tag in index.html
let rQuote = quotes[Math.floor(Math.random() * quotes.length)]
document.querySelector("#randomQuote").innerHTML =`${rQuote.quote}`
document.querySelector("#randomQuoteAuthor").innerHTML = `- ${rQuote.author}`