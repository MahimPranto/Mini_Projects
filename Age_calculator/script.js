// Get elements from HTML
const usernameInput = document.getElementById("username");
const dobInput = document.getElementById("dob");
const outputName = document.querySelector(".outputName");
const yearsOutput = document.querySelector(".years");
const monthsOutput = document.querySelector(".months");
const daysOutput = document.querySelector(".days");
const calculateBtn = document.querySelector(".btn");

// Add click event listener to the 'Calculate' button
calculateBtn.addEventListener("click", calculateAge);

function calculateAge() {
    const name = usernameInput.value;
    const dob = new Date(dobInput.value);
    const today = new Date();
    const birthDate = new Date(dob.getFullYear(), dob.getMonth(), dob.getDate());
    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    if(name==''){
        alert("Enter your name");
        return;
    }
    else if (dob>today){
        alert("Invalid Input");
        return;
    }
    // Handle negative ageMonths and ageDays
    else if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths = 12 + ageMonths;
        if (ageDays < 0) {
            ageDays = daysInMonth(today.getMonth(), today.getFullYear()) - dob.getDate() + today.getDate();
            ageMonths--;
        } else {
            ageDays = today.getDate() - dob.getDate();
        }
    } else if (ageMonths > 0 && ageDays < 0) {
        ageDays = daysInMonth(today.getMonth() - 1, today.getFullYear()) - dob.getDate() + today.getDate();
        ageMonths--;
    } else if (ageMonths === 0 && ageDays < 0) {
        ageDays = daysInMonth(today.getMonth() - 1, today.getFullYear()) - dob.getDate() + today.getDate();
        ageMonths = 11;
        ageYears--;
    }

    // Update output
    outputName.textContent = name;
    yearsOutput.textContent = `${ageYears} Years`;
    monthsOutput.textContent = `${ageMonths} Months`;
    daysOutput.textContent = `${ageDays} Days`;
}

// Function to get number of days in a month
function daysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}
