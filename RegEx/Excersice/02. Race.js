function main(input) {
    const participants = {};
    const splittedParticipants = input.shift().split(", ");
    const regexLetters = /[A-Za-z]/g;
    const regexNumber = /[0-9]/g;


    for(const line of splittedParticipants) {
        participants[line] = 0;
    }

    for (let i = 0; i < input.length; i++) {
        const line = input[i];
        let name = "";
        const numberArr = [];
        let km = 0;
        if (line === "end of race") {
            break;
        }
        let letter;
        while ((letter = regexLetters.exec(line)) !== null) {
            name += letter[0];
        }
        let number;
        if(participants[name] !== undefined) {
            while ((number = regexNumber.exec(line)) !== null) {
                numberArr.push(number[0]);
            }
            km = numberArr.reduce((acc, curr) => Number(acc) + Number(curr), 0);
            
            participants[name] += km;
        }
    }

    let place = 1;
    Object.keys(participants).sort((a, b) => {
        return participants[b] - participants[a];
    }).forEach(name => {
        
        if (place === 1) {
            console.log(`${place}st place: ${name}`);
            place++;
        } else if (place === 2) {
            console.log(`${place}nd place: ${name}`);
            place++;
        } else if (place === 3) {
            console.log(`${place}rd place: ${name}`);
            place++;
        }
    });
    
}

main(["George, Peter, Bill, Tom",
"G4e@55or%6g6!68e!!@",
"R1@!3a$y4456@",
"B5@i@#123ll",
"G@e54o$r6ge#",
"7P%et^#e5346r",
"T$o553m&6",
"end of race"]);