function main2(input) {
    input = input
        .map(stringArray => JSON.parse(stringArray))
        .map(array => array.sort((a, b) => b - a))
        .map(array => JSON.stringify(array));

    Array.from(new Set(input), JSON.parse)
        .sort((a, b) => a.length - b.length)
        .forEach(array => console.log(`[${array.join(", ")}]`));
}

function main(input) {
    const array = [];

    for (let i = 0; i < input.length; i++) {
        const parsedArray = JSON.parse(input[i]);
        array.push(parsedArray);
    }

    for (let i = 0; i < array.length; i++) {
        array[i].sort((a, b) => {
            return b - a;
        });
    }

    const result = Array.from(new Set(array.map(JSON.stringify)), JSON.parse);
    result.sort((a, b) => { return a.length - b.length; });

    for (let x = 0; x < result.length; x++) {
        console.log(`[${result[x].join(", ")}]`);
    }
}

main(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]);