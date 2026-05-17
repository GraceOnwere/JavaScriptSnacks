const extractedProperty = (object) => {

    const {password, ...newUser} = object ;

    return newUser;

};

const user = {userName: "admin", password: "12345"}

console.log(extractedProperty(user))
