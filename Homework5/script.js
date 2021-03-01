var today = "";
var todaysDateString = "";


var currentDate = new Date();
var cDay = currentDate.getDate();
var cMonth = currentDate.getMonth() + 1;
var cYear = currentDate.getFullYear();
var presentDay = cMonth + "/" + cDay + "/" + cYear;
var currentDayEl = document.getElementById("currentDay");
currentDayEl.textContent = presentDay;

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June", "July","August","September","October","November","December"];
