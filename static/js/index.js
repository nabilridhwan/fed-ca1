var ageSpan = document.getElementById("ageSpan")
// Get element of id main-header-h1
var mainHeaderH1 = document.getElementById("main-header-h1")
// Get element id of nav-brand
var navBrand = document.getElementById("nav-brand")
var gradientMode = false
var gradientModeInterval;


// calculate the years between today and the target year
var age = new Date().getFullYear() - 2003
// set the age span to the number of years
ageSpan.innerHTML = age