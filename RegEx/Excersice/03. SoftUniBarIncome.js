function main(input) {
    let totalIncome = 0;
    const regex = /%(?<name>[A-Z][a-z]+)%.*?<(?<product>\w+)>.*?\|(?<count>[0-9]+)\|.*?(?<price>[0-9]+\.?\d{0,2})\$/g;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "end of shift") {
            console.log(`Total income: ${totalIncome.toFixed(2)}`);
        }
        let infos;
        while ((infos = regex.exec(input[i]))) {

            const {name, product, count, price} = infos.groups;
            
            totalIncome += (count * price);
            console.log(`${name}: ${product} - ${(count * price).toFixed(2)}`);
        }
    }
}

main(["%George%<Croissant>|2|10.3$",
"%Peter%<Gum>|1|1.3$",
"%Maria%<Cola>|1|2.4$",
"end of shift"]);
