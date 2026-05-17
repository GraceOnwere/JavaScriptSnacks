const userId = (user) => {

    const{name,salary} = user;

    return `${name}\n${salary}`;
};

const employeeId = {name: "Dapo", role: "Engineering", salary: 50_000};

console.log(userId(employeeId));
//
//const extractedValues = ({name,salary} = {}) =>{
//
//    return `${name}\n${salary}`;
//}
//
//const employeeId = {name: "Dapo", role: "Engineering", salary: 50_000};
//
//console.log(extractedValues(employeeId));
