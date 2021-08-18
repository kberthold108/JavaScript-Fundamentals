function main(input) {
    let [string, words] = input;
    words.sort((a, b) => a.length - b.length);


    while (string.indexOf("_") !== -1) {
        const start = string.indexOf("_");
        let end = start;
        while (string[end] === "_") {
            end++;
        }
        const hole = end - start;
        for(let line of words) {
            if (line.length === hole) {
                string = string.replace("_".repeat(hole), line);
            }
        }

    }
    console.log(string)

}   


main(["Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"]]);