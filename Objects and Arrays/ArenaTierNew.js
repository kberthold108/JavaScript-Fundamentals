function main(input) {
    const arena = {};

    const calculateTotalSkill = (techniques) => Object.values(techniques).reduce((acc, cur) => acc + cur, 0);
    const haveCommonTechniques = (firstTechniques, secondTechniques) => Object.keys(firstTechniques).filter(technique => Object.keys(secondTechniques).includes(technique));
    const bothGladiatorsExist = (firstGladiator, secondGladiator) => firstGladiator && secondGladiator;

    let line;
    while ((line = input.shift()) !== undefined) {
        

        if (line === "Ave Cesar") {
            break;
        }

        if (line.indexOf("->") !== -1) {
            const [gladiator, technique, skill] = line.split(" -> ");
            
            if (!arena.hasOwnProperty(gladiator)) {
                arena[gladiator] = {};
            }

            const techniques = arena[gladiator];
            if (!techniques.hasOwnProperty(technique)) {
                arena[gladiator][technique] = Number(skill);
            } else if (Number(skill) > arena[gladiator][technique]) {
                arena[gladiator][technique] = Number(skill);
            }

        } else if (line.indexOf("vs") !== -1) {
            const [firstGladiator, secondGladiator] = line.split(" vs ");

            const firstGladiatorTechniques = arena[firstGladiator];
            const secondGladiatorTechniques = arena[secondGladiator];

            if (!bothGladiatorsExist(firstGladiatorTechniques, secondGladiatorTechniques)) {
                line = input.shift();
                continue;
            }

            const common = haveCommonTechniques(firstGladiatorTechniques, secondGladiatorTechniques);

            if (!common.length) {
                line = input.shift();
                continue;
            }

            const totalSkillFirst = calculateTotalSkill(arena[firstGladiator]);
            const totalSkillSecond = calculateTotalSkill(arena[secondGladiator]);

            if (totalSkillFirst < totalSkillSecond) {
                delete arena[firstGladiator];
            } else {
                delete arena[secondGladiator];
            }
        }
        line = input.shift();
    }

    //Printing output
    Object.keys(arena)
        .sort((glad1, glad2) => calculateTotalSkill(arena[glad2]) - calculateTotalSkill(arena[glad1]) || glad1.localeCompare(glad2))
        .forEach(glad => {
            console.log(`${glad}: ${calculateTotalSkill(arena[glad])} skill`);

            Object.keys(arena[glad])
                .sort((tech1, tech2) => arena[glad][tech2] - arena[glad][tech1] || tech1.localeCompare(tech2))
                .forEach(tech => console.log(`- ${tech} <!> ${arena[glad][tech]}`));
        });
}

main([
    "Pesho -> Duck -> 400",
    "Julius -> Shield -> 150",
    "Gladius -> Heal -> 200",
    "Gladius -> Support -> 250",
    "Gladius -> Shield -> 250",
    "Pesho vs Gladius",
    "Gladius vs Julius",
    "Gladius vs Gosho",
    "Ave Cesar"
]);