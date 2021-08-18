function main(input) {
    const attackedPlanets = {};
    const destroyedPlanets = {};
    
    const regexStar = /[STAR]/gi;
    const regexInformations = /.*?@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attackType>[ADad])![^@\-!:>]*->(?<soldier>\d+)/g;
    const numberOfPlanets = Number(input.shift());

    let decryptCode = 0;
    for (let i = 0; i < numberOfPlanets; i++) {
        
        const currentString = input[i];
        const decryptCodeArr = [];
        let star;
        while ((star = regexStar.exec(currentString))) {
            decryptCodeArr.push(star[0]);
        }
        decryptCode = decryptCodeArr.length;

        let planet = "";
        for (let line of input[i]) {
            line = line.charCodeAt() - decryptCode;
            line = String.fromCharCode(line);
            planet += line;
        }

        let planetInfo;
        while ((planetInfo = regexInformations.exec(planet))) {
            const {planet, attackType} = planetInfo.groups;         
            if (attackType === "A") {
                attackedPlanets[planet] = [];
            }
            if (attackType === "D") {
                destroyedPlanets[planet] = [];
            }
        }
    }
    
    console.log(`Attacked planets: ${Object.keys(attackedPlanets).length}`);
    Object.keys(attackedPlanets)
        .sort((a, b) => a.localeCompare(b))
        .forEach(planet => console.log(`-> ${planet}`));

    console.log(`Destroyed planets: ${Object.keys(destroyedPlanets).length}`);
    Object.keys(destroyedPlanets)
        .sort((a, b) => a.localeCompare(b))
        .forEach(planet => console.log(`-> ${planet}`));

}
main(["2", "STCDoghudd4=63333$d$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);