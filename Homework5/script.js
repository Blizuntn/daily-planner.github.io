



// var cMonth = currentDate.getMonth() + 1;
// var cYear = currentDate.getFullYear();
// var presentDay = cMonth + "/" + cDay + "/" + cYear;
// var currentDayEl = document.getElementById("currentDay");
// currentDayEl.textContent = presentDay;
var today = "";
var todaysDateString = "";

const timesOfTheDay = ["12AM","1AM","2AM","3AM","4AM","5AM","6AM","7AM","8AM","9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM","9PM","10PM","11PM"];
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June", "July","August","September","October","November","December"];
const frstEntry = 9;
const lstEntry = 17;
const timeEntrysName = "workDaySchedulerList";
setTodaysDateAndHour();
buildTimeSlots();
getTimeEntrys();

$(".saveBtn").click(sveClick);

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

function buildTimeSlots (){
    var containerDiv = $(".container");

    for (let hrBlock = frstEntry; hrBlock <= lstEntry; hrBlock++){
        var newHTML = '<div class= "row time-block"> ' + '<div class = "col-md-1 hour">' + timesOfTheDay[hrBlock] + '</div> ';

        if (hrBlock < currentHour){
            newHTML = newHTML + '<textarea class="col-md-10 description past" id="text' + timesOfTheDay[hrBlock] + '"></textarea> ';
        }
        else if (hrBlock === currentHour){
            newHTML = newHTML + '<textarea class="col-md-10 description present" id="text' + timesOfTheDay[hrBlock] + '"></textarea>';
        }
        else { 
            newHTML = newHTML + '<textarea class="col-md-10 description future" id="text' + timesOfTheDay[hrBlock] + '"></textarea>';
        };
        newHTML = newHTML + '<button class="btn saveBtn col-md-1" value="' + timesOfTheDay[hrBlock] + '">' + '<i class="fas fa- save"></i></button> ' + '</div>';

        containerDiv.append(newHTML);
    }

    }

    function getTimeEntrys(){
        var teList = JSON.parse(localStorage.getItem(timeEntrysName));

        if (teList){
            timeEntrys = teList;
        }

        for (let i = 0; i < timeEntrys.length; i++){
            if (timeEntrys[i].cDay == today){
                $("#text" + timeEntrys[i].time).val(timeEntrys[i].text);
            }
        }
    }

    function sveClk(){
        var hrBlock = $(this).val();
        var entryFnd = false;
        var newEntryIndx = TimeEntrys.length;
        var nwEntry = {day: today, time: hrBlock, text: $("#text" + hrBlock).val()};

        function tmeGreater(time1,time2){
            var number1 = parseInt(time1.substring(0, timel.length-2));
            var number2 = parseInt(time2.substring(0, time2.length-2));
            var per1 = time1.substr(-2,2);
            var per2 = time2.substr(-2,2);

            if (number1 === 12){
                number1 = 0;
            }
            if (number2 ===12){
                number2 = 0;
            }

            if (per1 < per2){
                return false;
            }
            else if (per1 > per2){
                return true;
            }
            else{
                return (number1 > number2);
            }
        }

        for (let i = 0; i < timeEntrys.length; i++){
            if (timeEntrys[i].day == today){
                if(timeEntrys[i].time == hrBlock){
                    timeEntrys[i].text = newEntry.text;
                    entryFnd = true;
                    break;
                }
                else if (tmeGreater(timeEntrys[i].day > today)){
                    newEntryIndx = i;
                }
            }
        if (!entryFnd){
            timeEntrys.splice(newEntryIndx, 0, newEntry);
        }
        localStorage.setItem(timeEntrysName, JSON.stringify(timeEntries));

    }
}