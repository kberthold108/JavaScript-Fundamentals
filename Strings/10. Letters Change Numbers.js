function main(input) {
    const regex = /(?<firstLetter>[A-Za-z])(?<number>\d*)(?<secondLetter>[A-Za-z])/gm;
    const splitted = input.split(" ").map(x => x.trim()).filter(x => x); 
    const alphabet = "abcdefghijklmnopqrstuvfxyz";
    let total = 0;

    for (const line of splitted) {
        let match;
        while ((match = regex.exec(line)) !== null) {
            let { firstLetter, number, secondLetter } = match.groups;
            
            if (firstLetter === firstLetter.toLowerCase()) {
                const letterPos = alphabet.indexOf(firstLetter) + 1;
                number *= letterPos;
            } else if (firstLetter === firstLetter.toUpperCase()) {
                const letterPos = alphabet.indexOf(firstLetter.toLowerCase()) + 1;
                number /= letterPos;
            }
            if (secondLetter === secondLetter.toLowerCase())  {
                const letterPos = alphabet.indexOf(secondLetter) + 1;  
                number += letterPos;
            } else if (secondLetter === secondLetter.toUpperCase()) {
                const letterPos = alphabet.indexOf(secondLetter.toLowerCase()) + 1;
                number -= letterPos;
            }
            total += number;
        }  
    }
    console.log(total.toFixed(2));
}

main("P34562Z q2576f   H456z");