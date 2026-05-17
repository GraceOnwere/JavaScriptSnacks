const daysOfTheWeek = "Saturday";

let dayCheck;


switch(daysOfTheWeek){

    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":

        dayCheck = "Weekday";
        break;

    case "Saturday":
    case "Sunday":

        dayCheck = "Weekend";
        break;

    default: 
        dayCheck = "Invalid Day of the week";
        break;
} 

console.log(dayCheck);
