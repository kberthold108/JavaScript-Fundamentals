function main(word, sentance) {
    const lowercaseWord = word.toLowerCase(); 
    let  lowercaseString = sentance.toLowerCase(); 
    lowercaseString = lowercaseString.split(" ");
    let wordFound = false;
    for (const word of lowercaseString) {
        if (word === lowercaseWord) {
            wordFound = true;
            console.log(word);
        }
    }
    if (wordFound === false) {
        console.log(`${word} not found!`);
    }
     
}

main("javascript",
"JavaScript is the best programming language");