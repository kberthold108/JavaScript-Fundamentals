function main(input) {
    input = input.map(val => Number(val));
    let finished = false;
    const all = [];

    while (!finished) {
        let concrete = 0;
        finished = true;
        for (let i = 0; i < input.length; i++) {
            if (input[i] < 30) {
                concrete += 195;
                input[i] += 1;
                finished = false;
            }
        }
        if (!finished) {
            all.push(concrete);
        }
    }

    const joinded = all.join(", ");
    console.log(joinded);
    console.log(`${Number(all.reduce((acc, curr) => acc + curr) * 1900)} pesos`);

}

main([21, 25, 28]);