function main(input) {
    
    const regex = /#(?<name>[A-Za-z]+)/gm;
    const matches = input.match(regex);
    matches.forEach(element => {
        const word = element.substr(1);
        console.log(word);
    });
}

main("Nowadays everyone uses # to tag a #special word in #socialMedia");