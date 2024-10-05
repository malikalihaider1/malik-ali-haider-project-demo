
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug",
    "Sep", "Oct", "Nov", "Dec"];
let addAmPm = new Date().getHours() > 11 ? "PM":"AM"; 
const myDate = `${days[new Date().getDay()]} ${months[new Date().getMonth()]} ${new Date().getDate()} ${new Date().getHours()>12 ? new Date().getHours()-12:new Date().getHours()}:${new Date().getMinutes()< 10 ? `0${new Date().getMinutes()}`: new Date().getMinutes() } ${addAmPm}`;
console.log(myDate);
