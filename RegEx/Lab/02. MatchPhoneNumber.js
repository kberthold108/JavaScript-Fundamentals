function main(numbers) {
    const regex = /(\+359)(?<seperate> |-)2\2([0-9]{3})\2([0-9]{4}\b)/gm;
    let validPhones  = [];
    while ((validPhone = regex.exec(numbers)) !== null) {
        validPhones.push(validPhone[0]);
    }
    console.log(validPhones.join(", "));
}


main("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222");