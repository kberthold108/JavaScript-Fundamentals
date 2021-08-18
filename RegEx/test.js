const regex = /[A-Za-z0-9]/g;
const arr  = ["G4e@55or%6g6!68e!!@", "DIS8asdkO2123As"];

for (const str of arr) {
    while((match = regex.exec(str)) !== null) {
        console.log(match);
    }
}
