function main(givenRooms, guests) {
    const doubleBedRooms = [];
    const tripleBedRooms = [];
    const teaHouse = [];

    for (const current of givenRooms) {
        current.guests = [];
        if (current.type === "double-bedded") {
            current.freeBeds = 2;
            doubleBedRooms.push(current);
        } else {
            current.freeBeds = 3;
            tripleBedRooms.push(current);
        }
    }

    // 1. Handle guests with DIFFERENT genders
    // Check for free room with 2 beds
    // IF there is a free room add them to the room remove free beds
    // ELSE add them to the teahouse

    // 2. Handle guests with SAME genders
    // Check for a room with free beds
    // IF there is no room with free beds -> add to the teahouse
    // ESLE iterate over each guest
    // IF we have a room with free space -> add the guest to the room
    // ESLE add the guest to the tea house

    for (const currenGuest of guests) {
        if ((!currenGuest.first.gender.localeCompare("male") && !currenGuest.first.gender.localeCompare("female"))) {
            continue;
        }

        if ((!currenGuest.second.gender.localeCompare("male") && !currenGuest.second.gender.localeCompare("female"))) {
            continue;
        }

        if (currenGuest.first.gender !== currenGuest.second.gender) {
            const roomsWithFreeBeds = doubleBedRooms.filter(room => room.freeBeds > 0);

            if (roomsWithFreeBeds.length > 0) {
                for (const currentRoom of roomsWithFreeBeds) {
                    Object.values(currenGuest).forEach(person => currentRoom.guests.push(person));
                    currentRoom.freeBeds = 0;
                    break;
                }
            } else {
                Object.values(currenGuest).forEach(person => teaHouse.push(person));
            }
        } else {
            Object.values(currenGuest).forEach(guest => {
                const roomsWithFreeBedsTriple = tripleBedRooms.filter(room => room.freeBeds > 0);

                if (roomsWithFreeBedsTriple.length > 0) {

                    let added = false;
                    for (const currentRoom of roomsWithFreeBedsTriple) {
                        if (currentRoom.guests.length > 0) {
                            if (currentRoom.guests[0].gender === guest.gender) {
                                currentRoom.guests.push(guest);
                                currentRoom.freeBeds -= 1;
                                added = true;
                                break;
                            }
                        } else {
                            currentRoom.guests.push(guest);
                            currentRoom.freeBeds -= 1;
                            added = true;
                            break;
                        }
                    }

                    if (!added) {
                        teaHouse.push(guest);
                    }
                } else {
                    teaHouse.push(guest);
                }
            });
        }
    }

    [...doubleBedRooms, ...tripleBedRooms]
        .sort((r1, r2) => Number(r1.number) - Number(r2.number))
        .forEach(room => {
            console.log(`Room number: ${room.number}`);

            room.guests.sort((g1, g2) => g1.name.localeCompare(g2.name))
                .forEach(guest => {
                    console.log(`--Guest Name: ${guest.name}`);
                    console.log(`--Guest Age: ${guest.age}`);
                });

            console.log(`Empty beds in the room: ${room.freeBeds}`);
        });

    console.log(`Guests moved to the tea house: ${teaHouse.length}`);
}

main([{ number: "101A", type: "double-bedded" },
{ number: "104", type: "triple" },
{ number: "101B", type: "double-bedded" },
{ number: "102", type: "triple" }],
    [{
        first: { name: "Sushi & Chicken", gender: "female", age: 15 },
        second: { name: "Salisa Debelisa", gender: "female", age: 25 }
    },
    {
        first: { name: "Daenerys Targaryen", gender: "trans", age: 20 },
        second: { name: "Jeko Snejev", gender: "male", age: 18 }
    },
    {
        first: { name: "Pesho Goshov", gender: "male", age: 20 },
        second: { name: "Gosho Peshov", gender: "male", age: 18 }
    },
    {
        first: { name: "Conor McGregor", gender: "male", age: 29 },
        second: { name: "Floyd Mayweather", gender: "male", age: 40 }
    }]);