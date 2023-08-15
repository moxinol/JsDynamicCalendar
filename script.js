const currentDate = document.querySelector(".current-date");
daysTag = document.querySelector(".days");
prevNextIcon = document.querySelectorAll(".icons span");

//getting new date, current year and month
let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();

const months=["January","February","March","April","May","June","July",
"August","September","Octuber","November","December"];

const renderCalendar = () => {
    let lastDateMonth= new Date(currYear, currMonth + 1, 0).getDate();//get last date of previous month
   let liTag = "";

    for (let i = 1; i <= lastDateMonth; i++) {
        liTag +=`<li>${i}</li>`;
        
    }
    currentDate.innerText =`${months[currMonth]} ${currYear}`;
    daysTag.innerHTML =liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => { //adding click event to both prev and next icons
        console.log(icon);
    });
});