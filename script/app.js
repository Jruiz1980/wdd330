let year = new Date();
document.getElementById("currentYear").textContent = year.getFullYear();
let date = new Date();
document.getElementById("currentDate").textContent = date.toDateString();
let time = new Date();
document.getElementById("currentHour").textContent = time.toTimeString();