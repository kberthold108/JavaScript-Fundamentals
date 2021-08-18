function main(input) {
    const coolThreshold = (arr) => arr.reduce((acc, curr) => {
        return acc * BigInt(curr);
    }, BigInt(arr.shift()));

    const emojiRegex = /(?<start>::|\*\*)([A-Z][a-z]{2,})\1/m;
    const numberRegex = new RegExp("\\d", "gm");
    const splitted = input[0].split(" ");
    const sumOfCoolness = coolThreshold(input.pop().match(numberRegex));

    const totalEmojis = {};
    console.log(`Cool threshold: ${sumOfCoolness}`);
    for (let i = 0; i < splitted.length; i++) {

        const emojis = splitted[i].match(emojiRegex);

        if (!emojis) {
            continue;
        }
        const [firstMatch, , emoji] = emojis;

        if (!totalEmojis[emoji]) {
            totalEmojis[emoji] = {};
        }
        const coolness = emoji.split("").map(char => char.charCodeAt(0)).reduce((acc, cur) => acc + cur, 0);
        totalEmojis[emoji].full = firstMatch;
        totalEmojis[emoji].coolness = coolness;
    }

    console.log(`${Object.keys(totalEmojis).length} emojis found in the text. The cool ones are:`);
    Object.keys(totalEmojis)
        .forEach(emoji => {
            if(totalEmojis[emoji].coolness < sumOfCoolness) {
                return;
            }

            console.log(totalEmojis[emoji].full);
        });
}


main(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);

///(?'start'::|\*\*)(?'emoji'[A-Z][a-z]{2,})(?P=start)/gm;