
function main(names) {
    const regex = /\b(?<firstName>[A-Z][a-z]{2,}) (?<lastName>[A-Z][a-z]{2,})\b/g;
    let validNames  = [];
    while ((validName = regex.exec(names)) !== null) {
        validNames.push(validName[0]);
    }
    console.log(validNames.join(" "));
}

main("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")