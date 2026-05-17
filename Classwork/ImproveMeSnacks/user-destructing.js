const extractedValues = (user) =>{

    const {name,age} = user;

    return `${name}\n${age}`;
};

const userId = {name: "Amaka", age: 25, country: "Nigeria"};

console.log(extractedValues(userId))
