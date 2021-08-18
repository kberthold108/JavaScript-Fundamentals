function main(input) {

    let string = input[0];

    
    for (let i = 1; i < input.length; i++) {
        let splitted = input[i].split(">>>");
        if (splitted[0] === "Slice") {
            const [, startIndex, endIndex] = splitted;
            const newArr = [...string];
            newArr.splice(startIndex, (endIndex - startIndex));
            string = newArr.join("");
            console.log(string);
        } else if (splitted[0] === "Flip") {
            let [,command, start, end] = splitted;
            start = Number(start);
            if (command === "Upper") { 
                for (let i = start; i < end; i++) {
                    
                    const letterUppercase = string.charAt(i).toUpperCase();
                    string = string.replace(string.charAt(i), letterUppercase);
                    
                }
                console.log(string);
            } else if (command === "Lower") { 
                for (let i = start; i < end; i++) {
                    
                    const letterLowerCase = string.charAt(i).toLowerCase();
                    string = string.replace(string.charAt(i), letterLowerCase);
                    
                }
                console.log(string);
            }

        } else if (splitted[0] === "Contains") {
            const [, subString] = splitted;
            if (string.indexOf(subString) !== -1) {
                console.log(`${string} contains ${subString}`);
            } else {
                console.log("Substring not found!");
            }
        } else if (splitted[0] === "Generate") {
            console.log(`Your activation key is: ${string}`);
        }
    }

}

main(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);