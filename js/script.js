const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const calculateAgeButton = document.querySelector(".arrow-div");
const dayInvalidMsg = document.querySelector(".day-invalid-msg");
const monthInvalidMsg = document.querySelector(".month-invalid-msg");
const yearInvalidMsg = document.querySelector(".year-invalid-msg");
const dayContainer = document.querySelector(".day-dashes");
const monthContainer = document.querySelector(".month-dashes");
const yearContainer = document.querySelector(".year-dashes");

const validateInput = (value, minValue, maxValue, element, errorMsgElement, errorMsg) => {
    if(value < minValue || value > maxValue) {
        element.style.borderColor = "red";
        errorMsgElement.innerHTML = errorMsg;
        return false;
    }else {
        element.style.borderColor = "";  
        errorMsgElement.innerHTML = ""; 
        return true;
    }
    
}

const calculateAndDisplayAge = (userValue, currentValue, container) => {
    const difference = currentValue > userValue ? currentValue - userValue : userValue - currentValue;
    const displayValue = difference < 10 ? "0" + difference : difference;
    container.innerHTML = displayValue;
}


calculateAgeButton.addEventListener('click', () => {

    dayInvalidMsg.innerHTML = "";
    monthInvalidMsg.innerHTML = "";
    yearInvalidMsg.innerHTML = "";

    // const userDate = new Date(`${yearInput.value}-${monthInput.value}-${dayInput.value}`);
    // const userDay  = userDate.getDate();
    // const userMonth = userDate.getMonth() + 1;
    // const userYear = userDate.getFullYear();

    const userDay = parseInt(dayInput.value, 10);
    const userMonth = parseInt(monthInput.value, 10);
    const userYear = parseInt(yearInput.value, 10);


     if (!dayInput.value || !monthInput.value || !yearInput.value) {
        alert("Please fill in all fields.");
        return;
    }

    if (isNaN(userDay) || isNaN(userMonth) || isNaN(userYear)) {
        alert("Please enter valid numbers for day, month, and year.");
        return;
    }

    const isDayValid = validateInput(userDay, 1, 31, dayInput, dayInvalidMsg, 'Must be a valid day');
    const isMonthValid = validateInput(userMonth, 1, 12, monthInput, monthInvalidMsg, 'Must be a valid month');
    const isYearValid = validateInput(userYear, 1800, new Date().getFullYear(), yearInput, yearInvalidMsg, 'Must be in the past');

    if(isDayValid && isMonthValid && isYearValid) {
        calculateAndDisplayAge(userDay, new Date().getDate(), dayContainer);
        calculateAndDisplayAge(userMonth, new Date().getMonth() + 1, monthContainer);
        calculateAndDisplayAge(userYear, new Date().getFullYear(), yearContainer);
    }
});



