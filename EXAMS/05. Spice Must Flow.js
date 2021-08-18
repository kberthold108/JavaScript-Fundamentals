function main(input) {
    let startingValue = Number(input);
    let days = 0;
    let spice = 0;
    while (startingValue >= 100) {

        spice += startingValue;
        startingValue -= 10;
        spice -= 26;
        days++;
    }
    spice -= 26;
    
    if (spice < 0) {
        spice = 0;
    }
    console.log(days);
    console.log(spice);
}

main(["111"]);