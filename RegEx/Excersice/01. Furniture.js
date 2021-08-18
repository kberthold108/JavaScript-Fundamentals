    function main(input) {
    let totalCost = 0;

    const regex = />>(?<product>[A-Za-z]+)<<(?<cost>\d+\.?\d*)!(?<quantity>\d+)/;
    console.log("Bought furniture:");
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "Purchase") {
            break;
        }

        // const match = input[i].match(regex);
        // if(!match) {
        //     continue;
        // }

        // const { product, cost, quantity } = match.groups;
        // console.log(product);
        // const costProduct = Number(cost) * Number(quantity);
        // totalCost += costProduct;

        let products;
        while ((products = regex.exec(input[i])) !== null) {
            const { product, cost, quantity } = products.groups;
            console.log(product);
            const costProduct = Number(cost) * Number(quantity);
            totalCost += costProduct;
        }
    }

    console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}

main([">>Sofa<<312.23!3",
    ">>TV<<300!5",
    ">Invalid<<!5",
    "Purchase",
    ">>Sodsdfa<<312.23!3"]);