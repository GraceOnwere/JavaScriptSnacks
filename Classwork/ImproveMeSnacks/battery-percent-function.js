const extractedProperty = (object) =>{

    const {batteryPercent} = object;

    return batteryPercent;
};

const phone = {brand: "Samsung", batteryPercent: 75}

console.log(extractedProperty(phone));
