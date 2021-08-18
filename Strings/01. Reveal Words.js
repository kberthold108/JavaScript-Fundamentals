function main(firstString, secondString) {
    let sentence = secondString;
    const words = firstString.split(", ");
    words.forEach(word => {
        sentence = sentence.replace(("*".repeat(word.length)), word);
    });
    console.log(sentence);  
}


main("great",
"softuni is ***** place for learning new programming languages");