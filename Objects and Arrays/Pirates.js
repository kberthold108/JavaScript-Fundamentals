function main(input) {
    let sail = false;
    let index = 0;

    const Towns = {};

    while (sail === false) {
        if (input[index] === "Sail") {
            sail = true;
            continue;
        }
        const splitted = input[index].split("||");
        const [town, citizien, gold] = splitted;

        if (!Towns[town]) {
            Towns[town] = {citiziens: Number(), gold: Number()};
        }
        Towns[town].citiziens += Number(citizien);
        Towns[town].gold += Number(gold);
        index++;
    }

    for(let i = index; i < input.length; i++) {
        if (input[i] === "End") {
            if (Object.keys(Towns).length === 0) {
                console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
            } else {
                console.log(`Ahoy, Captain! There are ${Object.keys(Towns).length} wealthy settlements to go to:`);
                Object.keys(Towns).sort((a, b) => {
                    return Towns[b].gold - Towns[a].gold || a.localeCompare(b);
                }).forEach(city => {
                    console.log(`${city} -> Population: ${Towns[city].citiziens} citizens, Gold: ${Towns[city].gold} kg`);
                });
            }
            
            
        }
        const splitted = input[i].split("=>");
        if (splitted[0] === "Prosper") {
            const [, town, gold] = splitted;
            if (gold < 0) {
                console.log("Gold added cannot be a negative number!" );
                continue;
            }
            Towns[town].gold += Number(gold);
            console.log(`${gold} gold added to the city treasury. ${town} now has ${Towns[town].gold} gold.`);

        }
        if(splitted[0] === "Plunder") {
            const [, town, kills, gold] = splitted;

            Towns[town].citiziens -= Number(kills);
            Towns[town].gold -= Number(gold);

            console.log(`${town} plundered! ${gold} gold stolen, ${kills} citizens killed.`);
            
            if(Towns[town].citiziens <= 0 || Towns[town].gold <= 0) {
                console.log(`${town} has been wiped off the map!`);
                delete Towns[town];

            }
        }
        
    }
}

main(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);