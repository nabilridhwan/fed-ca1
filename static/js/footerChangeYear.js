/* Footer Change Year is a file to change the year found in the footer to the current year */


var yearSpan = document.getElementById("yearSpan")

// set yearSpan inner HTML to current year
yearSpan.innerHTML = new Date().getFullYear()