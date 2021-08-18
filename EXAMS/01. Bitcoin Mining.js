function main(input) {
    let bitcoins = 0;
    const bitcoinValue = 11949.16;
    let gold = 0;
    const goldValue = 67.51;
    let firstDay = 0;

    for (let i = 1; i < (input.length + 1); i++) {
        let farmedGold = Number(input[i - 1]);
        if (i % 3 === 0 ) {
            farmedGold *= 0.7;
        }
        gold += (farmedGold * goldValue);
        if (gold >= bitcoinValue) {
            if (bitcoins === 0) {
                firstDay = i;
            }
            bitcoins += Math.floor(gold/bitcoinValue);
            gold %= bitcoinValue;
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if(firstDay !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${gold.toFixed(2)} lv.`);

}


main(["50", "100"]);