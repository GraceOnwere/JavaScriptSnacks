const changeOrderStatus = (object) =>{

    //const {status} = object;

    object.status = "delivered";

    return object;

};

const order = {id: 1, status: "pending"};

console.log(changeOrderStatus(order));
