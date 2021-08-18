function main(dates) {
    const regex = /\b(?<day>[0-9]{2})(?<sep>.|-|\/)(?<month>[A-Z][a-z]{2})\2(?<year>[0-9]{4}\b)/g;
    while ((validateDate = regex.exec(dates)) !== null) {
        const day = validateDate.groups["day"];
        const month = validateDate.groups["month"];
        const year = validateDate.groups["year"];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)
    }
}

main("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016")