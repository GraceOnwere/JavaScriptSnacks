const color = "red";

let message = "";

switch (color){

    case "Red":
        message = "Stop";
        break;

    case "Yellow":
        message = "Ready";
        break;

    case "Green":
        message = "Go";
        break;

    default:
        message = "Invalid Traffic Color";
}

console.log(message)
