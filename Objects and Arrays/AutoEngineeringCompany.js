function main (input) {
 
    let map = new Map()
 
    for (let i = 0; i < input.length; i++) {
 
        let splitted = input[i].split(" | ");
        let carBrand = splitted[0];
        let carModel = splitted[1];
        let producedCars = splitted[2];


        if (map.has(carBrand) === false) {
            map.set(carBrand, new Map());
        }

        if (map.get(carBrand).has(carModel) === false) {
            map.get(carBrand).set(carModel, 0)
        }

        map.get(carBrand).set(carModel, map.get(carBrand).get(carModel) + +producedCars)
        
    }

    map.forEach((value, key) => {console.log(key);
        value.forEach((x,y) => {
            console.log(`###${y} -> ${x}`);
        })
    })
    
}

main(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])