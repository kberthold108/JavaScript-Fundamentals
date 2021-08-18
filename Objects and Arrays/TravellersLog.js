function main(input) {
    const travellerPool = {};
    for (let i = 0; i < input.length; i++) {
        
        if (input[i].indexOf(" gets ") !== -1) {
            const [traveller, money] = input[i].split(" gets ");
            if (!travellerPool[traveller]) {
                travellerPool[traveller] = {money: Number(money)};
            } else if (travellerPool[traveller]) {
                travellerPool[traveller].money += Number(money);
            }
            
        } else {
            let splitted = input[i].split(" visited the ");
            const [traveller] = splitted;
            splitted = splitted[1].split(" in ");
            const [landmark] = splitted;
            splitted = splitted[1].split(" - ");
            const [country, cost] = splitted;

            if (!travellerPool[traveller]) {
                travellerPool[traveller] = {money: 0};
                console.log(`Not enough money to visit ${landmark}`);
                continue;
            }
            if (travellerPool[traveller].money < cost) {
                console.log(`Not enough money to visit ${landmark}`);
                continue;
            } 

            if (!travellerPool[traveller][country]) {
                travellerPool[traveller][country] = new Set();
            }

            if (!travellerPool[traveller][country].has(landmark)) {
                travellerPool[traveller][country].add(landmark);
                travellerPool[traveller]["money"] -= cost;
            }
        }
    }
    
    Object.keys(travellerPool).sort((a, b) => {
        return Object.keys(travellerPool[b]).length - Object.keys(travellerPool[a]).length;
    }).forEach(traveller1 => {
        console.log(`${traveller1} visited ${Object.keys(travellerPool[traveller1]).length - 1} countries and has ${travellerPool[traveller1].money} money left`);
        Object.keys(travellerPool[traveller1]).filter(test => test !== "money")
        .sort((a, b) => {
            return travellerPool[traveller1][b].size - travellerPool[traveller1][a].size;
        }).forEach(country => {
            console.log(`- ${country} -> ${travellerPool[traveller1][country].size} landmarks`);
            [...travellerPool[traveller1][country]].sort().forEach(landmarks => {
                console.log(`-- ${landmarks}`);
            });
        });
        
    });
    


}
    

main(["Peter gets 100", 
"Peter visited the StatueOfLiberty in USA - 50", 
"Bill gets 250", 
"Tim visited the ChristTheRedeemer in Brazil - 150", 
"Bill gets 400", 
"Bill visited the MountFuji in Japan - 600", 
"Bill visited the TeatroAmazonas in Brazil - 50",
"Bill gets 150", 
"Bill visited the ChristTheRedeemer in Brazil - 150", 
"Tim gets 500", 
"Bill visited the StatueOfLiberty in USA - 440", 
"Tim visited the StatueOfLiberty in USA - 440",
"Maria gets 650", 
"Maria visited the StatueOfLiberty in USA - 440", 
"Maria visited the CapeCod in USA - 100"]);