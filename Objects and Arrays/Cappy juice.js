function main(input) {
    let inStock = {};
    let output = [];

    for (let i = 0; i < input.length; i++) {
        let splitted = input[i].split(" => ")
        let juiceName = splitted[0]
        let quantity = splitted[1]
        quantity = parseInt(quantity);



        if (inStock.hasOwnProperty(juiceName) == false) {
            inStock[juiceName] = {
                name: juiceName,
                quantity: quantity,
                bottles: 0
            }
        } else {
            inStock[juiceName].quantity = Number(inStock[juiceName].quantity) + Number(quantity);
        }

        if (inStock[juiceName].quantity >= 1000) {
            if (inStock[juiceName].quantity >= 1000 && output.indexOf(juiceName) == -1) {
                output.push(juiceName)
            }
        }


        inStock[juiceName].bottles += parseInt(inStock[juiceName].quantity / 1000)
        inStock[juiceName].bottles = Math.floor(inStock[juiceName].bottles)

        inStock[juiceName].quantity %= 1000;
        console.log(inStock)
    }


    for (let x = 0; x < output.length; x++) {
        console.log(output[x] + " => " + inStock[output[x]].bottles);
    }
    
}




main(['Orange => 2000',
    'Peach => 1432',
    'Peach => 600']
)
