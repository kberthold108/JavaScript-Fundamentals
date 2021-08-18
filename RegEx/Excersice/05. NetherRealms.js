function main(input) {

    const regexName = /(?<name>[^\d\-*.+/])/gm;
    const regexNumber = /(?<number>-?\d*\.?\d+)/gm;
    const regexStuff = /(?<stuff>[*/])/gm;

    const splitted = input.split(",").map(x => x.trim());
    
    const demons = {};

    for (const currName of splitted) {
        const nameMatch = currName.match(regexName);
        const numberMatch = currName.match(regexNumber);
        const stuffMatch = currName.match(regexStuff);

        let health = 0;
        if (nameMatch) {
            health = nameMatch.map(val => val.charCodeAt(0)).reduce((acc, curr) => acc + curr);
        }

        let damage = 0;
        if (numberMatch) {
            damage = numberMatch.map(n => Number(n)).reduce((acc, curr) => acc + curr);
            if (stuffMatch) {
                for (const symbol of stuffMatch) {

                    if (symbol === "*") {
                        damage *= 2;
                    }
                    if (symbol === "/") {
                        damage /= 2;
                    }
                }
            }
        }
        demons[currName] = { health, damage };
    }



    Object.keys(demons)
        .sort((a, b) => a.localeCompare(b))
        .forEach(demon => {
            const dmg = demons[demon].damage.toFixed(2);
            console.log(`${demon} - ${demons[demon].health} health, ${dmg} damage`);
        });
}

main("M3ph-0.5s-0.5t0.0**");

