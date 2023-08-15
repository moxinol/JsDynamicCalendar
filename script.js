const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days"),
prevNextIcon = document.querySelectorAll(".icons span");

//getting new date, current year and month
let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();

const months=["January","February","March","April","May","June","July",
"August","September","Octuber","November","December"];

const renderCalendar = () => {
    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay(),//get first day of month
    lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(),//get last date of month
    lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay(),//get last day of month
    lastDateOfLastMonth= new Date(currYear, currMonth, 0).getDate();//get last date of previous month
    let liTag = "";

    for (let i = firstDayOfMonth; i > 0; i--) {//creating li of previous month last days
        liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
    }
    
    for (let i = 1; i <= lastDateOfMonth; i++) {//creating li of all days of current month 
        //adding active class to li if  current day, month and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
        && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
        
    }

    for (let i = lastDayOfMonth; i < 6; i++) {//creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
        
    }
    currentDate.innerText =`${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => { //adding click event to both prev and next icons
        //decrement or icrement by 1 current month based on icon that was clicked
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth<0 || currMonth >11){// if current month is less than 0 or bigger tha 11
            //creating a new date of current year and month  and pass it as date value
            date = new Date(currYear,currMonth);
            currYear = date.getFullYear();//updating current year with new date year
            currMonth = date.getMonth();//updating current month with new date year
            date = new Date();
        }else{// else pass new date as date value
            date = new Date();
        }
        renderCalendar();

    });
});