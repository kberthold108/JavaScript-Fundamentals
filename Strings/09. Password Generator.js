function main(input) {
    const key = input.pop().toUpperCase();
    const string1 = input.shift();
    const string2 = input.shift();

    let string = string1.concat(string2);
    let keyIndex = 0;
    string.toLowerCase();
    string = string.split("");
    for (let i = 0; i < string.length; i++) {

        if (keyIndex >= key.length) {
            keyIndex = 0;
        }
        if (string[i].match(/[aeiou]/)) {
            string[i] = key[keyIndex];
            keyIndex++;
        }
    }
    string = string.reverse().join("");
    console.log(`Your generated password is ${string}`);
}

main([
    "ilovepizza", "ihatevegetables",
    "orange"
    ]);