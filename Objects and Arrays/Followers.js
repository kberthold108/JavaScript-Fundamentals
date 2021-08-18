//keep track of users in the website
    //"Welcome, {user}"  = add him to the webiste
    //"{user} followed {another user}" track who followed who 
        //only if both exists
//sort them by followers in descending then by username
//for the one with the highest followers print all his followers

function main(input){
    const website ={};
    
    for (let i = 0; i < input.length; i++) {
        
        if(input[i].indexOf("Welcome,") !== -1) {
            const [, user] = input[i].split(", ");
            
            if (!website[user]) {
                website[user] = {following: new Set(), followers: new Set()};
            }
            

        } else if (input[i].indexOf(" followed ") !== -1){
            const [firstUser, secondUser] = input[i].split(" followed ");
            if(!website[firstUser] || !website[secondUser]) {
                continue;
            }   
            if (website[firstUser] === website[secondUser]) {
                continue;
            }
            
            website[firstUser].following.add(secondUser);
            website[secondUser].followers.add(firstUser);

        }

    }
    console.log(`Total users registered: ${Object.keys(website).length}`);
    
    const sorted = Object.keys(website).sort((a, b) => {
        return website[b]["followers"].size - website[a]["followers"].size || b.localeCompare(a);
    });
    
    for (let i = 0; i < sorted.length; i++) {
        console.log(`${i + 1}. ${sorted[i]} : ${website[sorted[i]].following.size} following, ${website[sorted[i]].followers.size} followers`);
        if (sorted[0] === sorted[i]) {
            [...website[sorted[0]]["followers"]].sort().forEach(name => {
                console.log(`*  ${name}`);
            });
        }
    }
    
}

main(["Welcome, EmilConrad",
    "Welcome, VenomTheDoctor",
    "Welcome, Saffrona",
    "Saffrona followed EmilConrad",
    "Saffrona followed VenomTheDoctor",
    "EmilConrad followed VenomTheDoctor",
    "VenomTheDoctor followed VenomTheDoctor",
    "Saffrona followed EmilConrad"]);