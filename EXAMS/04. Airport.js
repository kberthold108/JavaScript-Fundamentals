function main(input) {

    const leftAirplanes = {};
    const airport = {};

    for (const line of input) {
        const splitted = line.split(" ");
        const [planeId, town, passengerCount, action] = splitted;

        if (action === "land") {
            if (!leftAirplanes[planeId]) {
                leftAirplanes[planeId] = [town, passengerCount];
            } else if (leftAirplanes[planeId]) {
                continue;
            }
        } else if (action === "depart") {
            if (!leftAirplanes[planeId]) {
                continue;
            } else {
                delete leftAirplanes[planeId];
            }
        }

        if (!airport[town]) {
            airport[town] = {planes: [], arrivals: 0, departures: 0};
        }
        if (airport[town].planes.indexOf(planeId) === -1) {
            airport[town].planes.push(planeId);
        }
        
        if (action === "land") {
            airport[town].arrivals += Number(passengerCount);
        } else if (action === "depart") {
            airport[town].departures += Number(passengerCount);
        }

    }
    console.log("Planes left:");
    Object.keys(leftAirplanes).sort((a, b) => a.localeCompare(b)).forEach(plane => console.log(`- ${plane}`));
    Object.keys(airport).sort((a, b) => airport[b].arrivals - airport[a].arrivals || a.localeCompare(b))
    .forEach(val => {
        console.log(val);
        console.log(`Arrivals: ${Number(airport[val].arrivals)}`);
        console.log(`Departures: ${Number(airport[val].departures)}`);
        console.log("Planes:");
        airport[val].planes.sort((a, b) => a.localeCompare(b)).forEach(val => console.log(`-- ${val}`));
    });

}


main([
    "Airbus Paris 356 land",
    "Airbus London 321 land",
    "Airbus Paris 213 depart",
    "Airbus Ljubljana 250 land"
    ]);