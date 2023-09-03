// Accessing the clock elements 
const hoursEl=document.querySelector("#hours");
const minutesEl=document.querySelector("#minutes");
const secondsEl=document.querySelector("#seconds");
const meridianEl=document.querySelector("#meridian");
const formatEl=document.querySelector(".hrs-format");

// Handling the clock 
// Calling this clock function after every 1s 

// Click Event on 24-hrs format 
formatEl.addEventListener("click",()=>{
    var dataValueEl=formatEl.getAttribute("data-value");
    if(dataValueEl === '12'){
        formatEl.setAttribute("data-value", "24");
        formatEl.innerText="12";
    }
    else{
        formatEl.setAttribute("data-value", "12");
        formatEl.innerText="24";
    }
})

setInterval(Clock,1000);

function Clock(){
    const timeEl=new Date();
    
    // Getting the time, minutes and seconds from the timeEl
    let hrs=timeEl.getHours();
    let min=timeEl.getMinutes();
    let sec=timeEl.getSeconds();

    // Changing the AM and PM period 
    (hrs>12 ? meridianEl.innerHTML="PM" : meridianEl.innerHTML="AM");

    var dataValueEl=formatEl.getAttribute("data-value");
    if(dataValueEl === '12'){
        hrs= hrs>12 ? hrs % 12 : hrs;
    }
  
  // Values less than 10
  hrs=(hrs<10) ? "0"+ hrs:hrs;
  min=(min<10) ? "0"+ min:min;
  sec=(sec<10) ? "0"+ sec:sec;
    // Saving the changes to the html elements of clock
    hoursEl.innerText=hrs;
    minutesEl.innerText=min;
    secondsEl.innerText=sec;
}

// Accessing the date elements 
const weekdayEl=document.querySelector(".day");
const dateEl=document.querySelector(".date");
const yearEl=document.querySelector(".year");
const monthEl=document.querySelector(".month");

// Weekdays 
const weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// Months 
const Months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

// Changing the date elements 
const date=new Date();
weekdayEl.innerHTML=weekdays[date.getDay()];
dateEl.innerHTML=date.getDate();
yearEl.innerHTML=date.getFullYear();
monthEl.innerHTML=Months[date.getMonth()];