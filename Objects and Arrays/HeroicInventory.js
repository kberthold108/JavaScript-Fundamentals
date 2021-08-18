function main(input) {
    let heroData = [];

    for (let i = 0; i < input.length; i++) {

        let currentHeroArguments = input[i].split(" / ");

        let currentHeroName = currentHeroArguments[0];
        let currentHeroLevel = Number(currentHeroArguments[1]);
        let currentHeroitems = []


        if (currentHeroArguments.length > 2) {
            currentHeroitems = currentHeroArguments[2].split(", ")
        }

        let hero = {
            name: currentHeroName,
            level: currentHeroLevel,
            items: currentHeroitems
        };
        heroData.push(hero)

    }
    console.log(JSON.stringify(heroData));
}

main(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)