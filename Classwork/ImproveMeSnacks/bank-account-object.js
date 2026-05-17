const extractedValues = (object) =>{

    const {balance} = object;

    if (balance <= 1000)
        return `Low balance`;

    return `Sufficient Balance`;
}

const account = {accountName: "Grace", balance: 500}

console.log(extractedValues(account));
