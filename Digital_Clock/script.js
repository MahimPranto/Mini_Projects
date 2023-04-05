function setDate(){
    const d = new Date(),
        days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        day = days[d.getDay()],
        date = d.getDate(),
        month = months[d.getMonth()],
        year = d.getFullYear();
    return `${day}, ${date}, ${month}, ${year}`

}
document.querySelector(".showDate").innerHTML = setDate();
function setTime(){
    const d = new Date();
    let hour=d.getHours(),
        minutes=d.getMinutes(),
        second=d.getSeconds();

    const amPm  = hour >= 12 ? "PM" : "AM";
        hour = hour % 12 || 12;
        hour = hour < 10 ? "0" + hour : hour;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        second = second < 10 ? "0" + second : second;

    const time = `${hour} : ${minutes} : ${second} ${amPm}`;
    document.querySelector(".showTime").innerHTML = time;


}
setInterval(setTime, 1000);
