function main(input) {
    const airport = {};
    const [flightInformations, flightActions, condition] = input;

    for(let i = 0; i < flightInformations.length; i++) {
        const [flightNumber, destination] = flightInformations[i].split(" ");
        if (!airport[flightNumber]){
            airport[flightNumber] = {Destination: destination, status: "Ready to fly"};
        }
          
    }
    
    for (let i = 0; i < flightActions.length; i++) {
        
        const [flightNumber, newStatus] = flightActions[i].split(" ");
        
        if (airport[flightNumber]) {
            airport[flightNumber]["status"] = newStatus;
        }

    }
    Object.keys(airport).forEach(flight => {
        if (airport[flight]["status"] === condition[0]) {
            console.log(`{ Destination: '${airport[flight].Destination}', Status: '${airport[flight].status}' }`);
        }
    });

}


main([["WN269 Delaware",
"FL2269 Oregon",
 "WN498 Las Vegas",
 "WN3145 Ohio",
 "WN612 Alabama",
 "WN4010 New York",
 "WN1173 California",
 "DL2120 Texas",
 "KL5744 Illinois",
 "WN678 Pennsylvania"],
 ["DL2120 Cancelled",
 "WN612 Cancelled",
 "WN1173 Cancelled",
 "SK430 Cancelled"],
 ["Cancelled"]
]);