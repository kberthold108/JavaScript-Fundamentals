

//two different inputs { kingdom: String, general: String, army: Number }
//  [
//	[ "{AttackingKingdom} ", "{AttackingGeneral}", "{DefendingKingdom} ", "{DefendingGeneral}" ],
//  ]
// track the different kingdoms with ther generals and armies 
//If a general already exist in the kindom increase his army with the given one
//If a general doesnt exist add him and his army to his kindom
//when receiving the fight array
    //check what kindom with his general is attacking the defending kindom with his general
    //compare the two armies - the one with the larger one wins
        //The winner increases his army by 10%
        //The loser decrease shis army by 10%
            //round the armys down!
        //Draw = do nothing
        //if kingdom doesnt exist do nothing
        //if general doesnt exist do nothing
    //keep track of all wins and losses
    //generals from same kindom = cant attack eachother

//at the end order them by there generals wins (descending)
    //then by there losses(ascending)
    //then by kindoms name (ascending)

//print the winning kindowm with:
    //generals sorted by their armies in descending order

    /*
        {
            "Kingdom": {
                    general: {
                        wins: number, 
                        losses: number, 
                        army: number
                    }
                    general2: {wins: number, losses: number, army: number}
                    genral3: {wins: number, losses: number, army: number}
                    ...
                }
        }

    */

        // const stats = {wins: 0, losses: 0, army: 3000};
        // console.log(stats["wins"]);
        // console.log(stats.wins);


function main(input, battles) {
    const kingdomPool = {};

    for (let i = 0; i < input.length; i++) {
        const kingdomInfo = input[i];
        
        const {kingdom, general, army} = kingdomInfo;

        if (kingdomPool[kingdom] === undefined) {
            kingdomPool[kingdom] = {};
        }

        if (kingdomPool[kingdom][general] === undefined) {
            kingdomPool[kingdom][general] = { wins: 0, losses: 0, army: 0};
        }

        kingdomPool[kingdom][general].army += army;
    }

    for (let i = 0; i < battles.length; i++) {
        const battleInfo = battles[i];

        const [attackingKingdom, attackingGeneral, defendingKingdom, defendingGeneral] = battleInfo;


        if(attackingKingdom === defendingKingdom) {
            continue;
        }

        if(kingdomPool[attackingKingdom] === undefined || kingdomPool[defendingKingdom] === undefined) {
            continue;
        }
        if(kingdomPool[attackingKingdom][attackingGeneral] === undefined || kingdomPool[defendingKingdom][defendingGeneral] === undefined) {
            continue;
        }
        
        if (kingdomPool[attackingKingdom][attackingGeneral].army > kingdomPool[defendingKingdom][defendingGeneral].army) {

            kingdomPool[attackingKingdom][attackingGeneral].army *= 1.1;
            kingdomPool[attackingKingdom][attackingGeneral].army = Math.floor(kingdomPool[attackingKingdom][attackingGeneral].army);
            kingdomPool[attackingKingdom][attackingGeneral].wins += 1;

            kingdomPool[defendingKingdom][defendingGeneral].army *= 0.9;
            kingdomPool[defendingKingdom][defendingGeneral].army = Math.floor(kingdomPool[defendingKingdom][defendingGeneral].army);
            kingdomPool[defendingKingdom][defendingGeneral].losses += 1;

        } else if (kingdomPool[attackingKingdom][attackingGeneral].army < kingdomPool[defendingKingdom][defendingGeneral].army) {

            kingdomPool[attackingKingdom][attackingGeneral].army *= 0.9;
            kingdomPool[attackingKingdom][attackingGeneral].army = Math.floor(kingdomPool[attackingKingdom][attackingGeneral].army);
            kingdomPool[attackingKingdom][attackingGeneral].losses += 1;

            kingdomPool[defendingKingdom][defendingGeneral].army *= 1.1;
            kingdomPool[defendingKingdom][defendingGeneral].army = Math.floor(kingdomPool[defendingKingdom][defendingGeneral].army);
            kingdomPool[defendingKingdom][defendingGeneral].wins += 1;
        }
        
    }
    
    const sorted = Object.keys(kingdomPool).sort((king1, king2) => {
        

        const general1Wins = Object.values(kingdomPool[king1]).reduce((acc, curr) =>{
            return acc + curr.wins;
        }, 0);

        const general2Wins = Object.values(kingdomPool[king2]).reduce((acc, curr) =>{
            return acc + curr.wins;
        }, 0);

        const general1Losses = Object.values(kingdomPool[king1]).reduce((acc, curr) =>{
            return acc + curr.losses;
        }, 0);
        const general2Losses = Object.values(kingdomPool[king2]).reduce((acc, curr) =>{
            return acc + curr.losses;
        }, 0);

        return general2Wins - general1Wins || general1Losses - general2Losses || king1.localeCompare(king2); 

    });
    
  
    const winner = Object.keys(kingdomPool[sorted[0]]).sort((army1, army2) => {
        const genral1Army = kingdomPool[sorted[0]][army1]["army"];
        const genral2Army = kingdomPool[sorted[0]][army2]["army"];
        return genral2Army - genral1Army;
    });
    

    console.log(`Winner: ${sorted[0]}`);
    winner.forEach((general) => {
        console.log(`/\\general: ${general}`);
        console.log(`---army: ${kingdomPool[sorted[0]][general]["army"]}`);
        console.log(`---wins: ${kingdomPool[sorted[0]][general]["wins"]}`);
        console.log(`---losses: ${kingdomPool[sorted[0]][general]["losses"]}`);
    
    });
}

main([ 
        { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } 
    ],
    [ 
        ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] 
    ]
    );