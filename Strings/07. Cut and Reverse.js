function main(input) {
    let firstHalf = input.substring(0, (input.length / 2));
    let secondHalf = input.substring((input.length / 2));

    firstHalf.split("").reverse().join("");
    firstHalf = firstHalf.split("").reverse().join("");

    secondHalf.split("").reverse().join("");
    secondHalf = secondHalf.split("").reverse().join("");
    
    console.log(`${firstHalf}\n${secondHalf}`);
}

main("tluciffiDsIsihTgnizamAoSsIsihT");