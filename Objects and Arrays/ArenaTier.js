 function main(input) {
    let index = 0;
    let gladiatorPool = {};
    while (input[index] !== "Ave Cesar") {
        if (input[index].indexOf(" -> ") > -1) {
            const [gladiator, technique, skill] = input[index].split(" -> ");

            if (gladiatorPool[gladiator] === undefined) {
                gladiatorPool[gladiator] = {};
            }

            if (gladiatorPool[gladiator][technique] === undefined) {
                gladiatorPool[gladiator][technique] = Number(skill);
            } else {
                if (gladiatorPool[gladiator][technique] < Number(skill)) {
                    gladiatorPool[gladiator][technique] = Number(skill);
                }
            }
        }
        else if (input[index].indexOf(" vs ") > -1) {
            firstSkill = 0;
            secondSkill = 0;
            const [gladiator1, gladiator2] = input[index].split(" vs ");

           
            if (gladiatorPool[gladiator1] && gladiatorPool[gladiator2]) {
                let gladiator1Techniques = Object.getOwnPropertyNames(gladiatorPool[gladiator1]);
                let gladiator2Techniques = Object.getOwnPropertyNames(gladiatorPool[gladiator2]);
                let techniques = gladiator1Techniques.filter((n) => gladiator2Techniques.indexOf(n) !== -1);

                if (techniques && techniques.length > 0) {
                    firstGladiatorTechnique = Object.entries(gladiatorPool[gladiator1]);
                    secondGladiatorTechnique = Object.entries(gladiatorPool[gladiator2]);

                    for (let i = 0; i < firstGladiatorTechnique.length; i++) {
                        firstSkill += firstGladiatorTechnique[i][1];
                    }
                    for (let u = 0; u < secondGladiatorTechnique.length; u++) {
                        secondSkill += secondGladiatorTechnique[u][1];
                    }

                    if (firstSkill > secondSkill) delete gladiatorPool[gladiator2];
                    if (firstSkill < secondSkill) delete gladiatorPool[gladiator1];
                }
            }

        }
        index++;
    }

    Object.keys(gladiatorPool).sort((glad1, glad2) => {
        const skillSum1 = Object.values(gladiatorPool[glad1]).reduce((acc, curr) => acc + curr, 0);
        const skillSum2 = Object.values(gladiatorPool[glad2]).reduce((acc, curr) => acc + curr, 0);
        return skillSum2 - skillSum1 || glad1.localeCompare(glad2);
    }).forEach((glad) => {
        let skillsum = Object.values(gladiatorPool[glad]).reduce((acc, curr) => acc + curr, 0)
        console.log(`${glad}: ${skillsum} skill`);
        Object.keys(gladiatorPool[glad])
            .sort((tech1, tech2) => gladiatorPool[glad][tech2] - gladiatorPool[glad][tech1] || tech1.localeCompare(tech2))
            .forEach((tech) => {
                console.log(`- ${tech} <!> ${gladiatorPool[glad][tech]}`)

            })
    })
}



main(["Pesho -> Duck -> 400",
    "Julius -> Shield -> 150",
    "Gladius -> Heal -> 200",
    "Gladius -> Support -> 250",
    "Gladius -> Shield -> 250",
    "Pesho vs Gladius",
    "Gladius vs Julius",
    "Gladius vs Gosho",
    "Ave Cesar"])

    //two different input formats
//"{gladiator} -> {technique} -> {skill}"
//"{gladiator} vs {gladiator}"
//keep track of all gladiators in object {gladiator: {technique: skill}}
//if present - check for technique and upadate his skill if old skill is lower 
//if not present add gladiator with technique and skill
//when received gladiator vs gladiator check if both exist
//if they both exist and they have a technique in common 
//gladiator with higher total skill wins - loser gets deleted
//if no technique in commen nothing happens 

//when recieving Ave Cesar print all galdiators by s
//first order: by skill in descending order
//second by name in ascending order
//print each technique and skill 
//in descending by skill level
//by name in ascending order 
