function main(input) {

    let catalogue = {}
    let sortedArray = []
    let array = []
    let array2 = []
    for (let i = 0; i < input.length; i++) {

        let splitted = input[i].split(" : ")
        let product = splitted[0];
        let price = splitted[1];

        catalogue = {
            startLetter: product[0],
            productname: product,
            price: price
        }

        sortedArray.push(catalogue)
    }

    sortedArray.sort((a, b) => (a.productname > b.productname) ? 1 : ((b.productname > a.productname) ? -1 : 0))


    for (let x = 0; x < sortedArray.length; x++) {


        if (array.indexOf(sortedArray[x].startLetter) == -1) {
            array.push(sortedArray[x].startLetter)
        }
        array2.push(sortedArray[x].startLetter)
    }

    for (let j = 0; j < array.length; j++) {
        console.log(array[j])
        for (let o = 0; o < array2.length; o++) {
            if (sortedArray[o].startLetter == array[j]) {
                console.log("  " + sortedArray[o].productname + ": " + sortedArray[o].price)
            }
        }
    }
}




main(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)