// Get all h1, h2, h3, h4, h5, h6 elements
var h1 = document.getElementsByTagName("h1")
var h2 = document.getElementsByTagName("h2")
var h3 = document.getElementsByTagName("h3")
var h4 = document.getElementsByTagName("h4")
var h5 = document.getElementsByTagName("h5")
var h6 = document.getElementsByTagName("h6")

// Get body element
var body = document.querySelector("body")

// Get all p tags and figcaptions tags
var p = document.getElementsByTagName("p")
var figcaptions = document.getElementsByTagName("figcaption")

// Get nav with class of navbar via queryselector
var nav = document.querySelector(".navbar")

// Get navLinks with class of nav-link via queryselector
var navLinks = document.querySelectorAll(".nav-link")

// Get activeNavLink with class of active via queryselector
var activeNavLink = document.querySelector(".nav-link.active")

// Get navbarBrand with class of navbar-brand via queryselector
var navbarBrand = document.querySelector(".navbar-brand")

// Get navbar with with class of navbar via queryselector
var navbar = document.querySelector(".navbar")

// Get id darkModeButton
var darkModeButton = document.getElementById("darkModeButton")

// Get all tag label
var labels = document.getElementsByTagName("label")

// Get all td elements
var td = document.getElementsByTagName("td")



function toggleDarkMode() {

    // Toggle body with bg-dark
    body.classList.toggle("bg-dark")
    navbar.classList.toggle("bg-dark")

    // Check if bg-white class is part of navbar
    if (navbar.classList.contains("bg-white")) {
        navbar.classList.toggle("bg-white")
    }

    // Iterate through h1, h2, p and navbarBrand elements and toggle class of text-white to them
    for (var i = 0; i < h1.length; i++) {
        h1[i].classList.toggle("text-white")
    }
    for (var i = 0; i < h2.length; i++) {
        h2[i].classList.toggle("text-white")
    }
    for (var i = 0; i < h3.length; i++) {
        h3[i].classList.toggle("text-white")
    }

    for (var i = 0; i < labels.length; i++) {
        labels[i].classList.toggle("text-white")
    }

    for (var i = 0; i < td.length; i++) {
        td[i].classList.toggle("text-white")
    }

    
    navbarBrand.classList.toggle("text-white")


    // Iterate through h3, h4, h5, h6, navLinks and figcaptions elements and toggle class of text-light to them
    for (var i = 0; i < h4.length; i++) {
        h4[i].classList.toggle("text-light")
    }
    for (var i = 0; i < h5.length; i++) {
        h5[i].classList.toggle("text-light")
    }
    for (var i = 0; i < h6.length; i++) {
        h6[i].classList.toggle("text-light")
    }
    for (var i = 0; i < p.length; i++) {
        p[i].classList.toggle("text-light")
    }
    for (var i = 0; i < figcaptions.length; i++) {
        figcaptions[i].classList.toggle("text-light")
    }
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.toggle("text-light")
    }

}

// Add event listener to darkModeButton of click toggle the text between "Light Mode" and "Dark Mode" and calls toggleDarkMode function and 
darkModeButton.addEventListener("click", function (e) {

    // If localstorage darkMode is "true", set it to "false" and vice versa
    if (localStorage.getItem("darkMode") === "true") {
        localStorage.setItem("darkMode", "false")
    } else {
        localStorage.setItem("darkMode", "true")
    }

    if (darkModeButton.innerHTML === "Light Mode") {
        // Dark mode is not activated
        e.target.innerHTML = "Dark Mode"
        localStorage.setItem("darkMode", "false")
    } else {

        // Dark mode activated
        e.target.innerHTML = "Light Mode"
        localStorage.setItem("darkMode", "true")
    }


    toggleDarkMode()
})

// Check if localstorage darkMode is "true", and if yes, automatically run toggleDarkMode function
if (localStorage.getItem("darkMode") === "true") {
    darkModeButton.innerHTML = "Light Mode"
    toggleDarkMode()
}