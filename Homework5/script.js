



// var cMonth = currentDate.getMonth() + 1;
// var cYear = currentDate.getFullYear();
// var presentDay = cMonth + "/" + cDay + "/" + cYear;
// var currentDayEl = document.getElementById("currentDay");
// currentDayEl.textContent = presentDay;
var today = "";
var todaysDateString = "";

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June", "July","August","September","October","November","December"];
setTodaysDateAndHour();

function setTodaysDateAndHour () {
    var cDate = new Date();
    var cDay = cDate.getDate();
    var dayEnding = "th";

    currentHour = cDate.getHours();
    if (cDay < 10){
        today = cDate.getFullYear() + months[cDate.getMonth()] + "0" + cDay;
    }
    else {
        today = cDate.getFullYear() + months[cDate.getMonth()] + cDay;
    }

    if ((cDay === 1) || (cDay === 21) || (cDay === 31)){
        dayEnding = "st";
    }
    else if ((cDay === 2) || (cDay === 22)){
        dayEnding = "nd";
    }
    else if ((cDay === 3) || (cDay === 23)){
        dayEnding = "rd";
    }

    todaysDateString = days[cDate.getDay()] + ", " + months[cDate.getMonth()] + " " + cDay + dayEnding + ", " + cDate.getFullYear();
    $("#currentDay").text(todaysDateString);
    
}