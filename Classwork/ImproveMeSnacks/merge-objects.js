const personal = {name: "Kemi", age: 27};

const professional = {role: "Designer", company: "TechCorp"};

const mergedObj = {...personal, ...professional};

console.log(mergedObj);

console.log(personal);

//const mergedObj = Object.assign({},personal,professional);
//
//console.log(mergedObj);
//
//console.log(personal);
