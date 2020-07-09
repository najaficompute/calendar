

// creating all the months in an array
var months = ['Jan','Feb','Mar','April','May','June','July','Aug','Sept','Oct','Nov','Dec'];

// creating all the months in an array
var days = ['Sun','Mon','Tues','Wed','Thur','Fri','Sat'];

var daysFull = ['Sunday',"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// calling the date through javascript Date() function
var date = new Date();

// todays date number only
var todaysDate = date.getDate();

// storing the current year, month, and day
const currentYear = date.getFullYear();
var monthNum = date.getMonth(); 
var unchangedMonthNum = date.getMonth(); // this month value never changes
var currentMonth = months[monthNum];
const dayNum = date.getUTCDay();
const currentDay = days[dayNum];


// writes the current date onto the calendar
var writtenDate = daysFull[dayNum] + "," + "\xa0\xa0\xa0" + months[unchangedMonthNum] + " " + todaysDate;
document.getElementById('todays-date').innerText = "Todays Date is " + writtenDate ;


//getting the first day of the current month
function firstDay(currentYear, monthNum){
 var createdMon = new Date(currentYear, monthNum, 1);
 var firstDay = createdMon.getDay();
 return firstDay;
}


// storing the month value in the month button
function monthValue(){
    var monthButton = document.getElementById('month').value;
    return monthButton;
}


// function highlighting todays date
function today(){
    var elements = document.getElementsByClassName("dot");
    for (i = 0; i <  elements.length; i++){
        if (elements[i].innerHTML == todaysDate && monthValue() == unchangedMonthNum)
        {
            elements[i].style.cssText = "background-color: rgb(252, 192, 170); border-radius:100px; color: rgb(255, 255, 255);"
        }
    }
}

//gets the number of days in the current month by using the getDate function with the day set to 0
function totalDays(currentYear, monthNum){
    return new Date(currentYear, monthNum + 1, 0).getDate();
}


// create spaces for the empty days we dont use at the beginning of the month
function createCalendarEmpty(){
    for(i = 0; i < firstDay(currentYear, monthNum); i++){
      var d = document.createElement("div");
      d.classList.add("empty");
      document.getElementById("calendarDays").appendChild(d);
      d.innerHTML = " ";
    }
}

// creates spaces for the days and fills them with the date number they have
function createDays(){
    for (i = 0; i < totalDays(currentYear, monthNum); i++){
        var d = document.createElement("div");
        d.classList.add("dot");
        document.getElementById("calendarDays").appendChild(d);
        d.innerHTML = i + 1;
    }
}

// clears the calendar of all day divs
function clearDays(){

    var elements = document.getElementsByClassName("dot");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    var elements = document.getElementsByClassName("empty");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}




// a function that changes the calendar for a specific month
function changeMonth(){
    var sel = monthValue();
    monthNum = sel;
    
    clearDays();
    createCalendarEmpty();
    createDays();
    today();
    click();
} 


// displays or hides the form and resets it.
// also takes the date value and inputs it in the form.
function popUP(){
    lastpress = document.getElementsByClassName("dot").innerHTML;
    var x = document.getElementById("contact-form");
    var month = document.getElementById("month").value;
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("form-date").value = "2020, " + months[month] + " " + "Day & Time";
  } else {
    x.style.display = "none";
    x.reset(); 
}


}


today();
createCalendarEmpty();
createDays();
click();



// when you click on any date it will call another function called popUP
var lastpress = 0;

function click(){
var d = document.getElementsByClassName('dot');
for (i = 0; i < d.length; i++){
    d[i].addEventListener('click',popUP);
    
}

}
    






