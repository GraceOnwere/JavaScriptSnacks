const order = {status: "shipped"};

if (order.status == "pending")

    console.log("Processing");

else if (order.status == "shipped")

    console.log("Shipped");

else if (order.status == "delivered")

    console.log("Delivered");
