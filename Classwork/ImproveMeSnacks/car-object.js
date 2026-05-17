const availableCheck = ({available}) =>{

    if (available === true)
        return `The car is available`;

    return `Not available`;
}

const car = {brand: "Toyota", model: "Camry", available: true};

console.log(availableCheck(car));
