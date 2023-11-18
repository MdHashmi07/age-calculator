const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const calculateAgeButton = document.querySelector(".arrow-div");
const dayInvalidMsg = document.querySelector(".day-invalid-msg");
const monthInvalidMsg = document.querySelector(".month-invalid-msg");
const yearInvalidMsg = document.querySelector(".year-invalid-msg");
const dayContainer = document.querySelector(".day-dashes");
const monthContainer = document.querySelector(".month-dashes");
const yearContainer = document.querySelector(".year-dashes");



let date = new Date();

let currentDay = date.getDate();
let currentMonth = date.getMonth() + 1;
let currentYear = date.getFullYear();

let currentDate = `${day}-${month}-${year}`;
console.log(currentDate);


calculateAgeButton.addEventListener('click', () => {
    if (!day.value || !month.value || !year.value) {
        alert("Please fill all fields")
    } else {

        if (day.value < 0 || day.value > 31) {
            day.style.borderColor = "red";
            dayInvalidMsg.innerHTML = `Must be a valid day`;
        } else {
            let calculateDate = currentDay > Number(day.value)? currentDay - Number(day.value) : Number(day.value) - currentDay;

            if(calculateDate < 10) {
                 dayContainer.innerHTML = "0" + calculateDate ;
            }else {
                dayContainer.innerHTML = calculateDate;
            }
        }

        if (month.value < 0 || month.value > 12) {
            month.style.borderColor = "red";
            monthInvalidMsg.innerHTML = `Must be a valid month`;
        } else {
            let calculateMonth = currentMonth > Number(month.value) ? currentMonth - Number(month.value) : Number(month.value) - currentMonth;
            
            if(calculateMonth < 10) {
                monthContainer.innerHTML = "0" + calculateMonth;
            }else {
                monthContainer.innerHTML = calculateMonth;
            }
        }

        if (year.value < 1800 || year.value > currentYear) {
            year.style.borderColor = "red";
            if(year.value > currentYear) {
                yearInvalidMsg.innerHTML = `Must be in the past`;
            } else if( year.value < 1800) {
                yearInvalidMsg.innerHTML = `Add after 1800`;
            }
            
        }else {
            yearContainer.innerHTML = currentYear - Number(year.value);
        }
    }

});



