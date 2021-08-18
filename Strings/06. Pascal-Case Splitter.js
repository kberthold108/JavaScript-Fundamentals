function main(input) {
    console.log(input.split(/(?=[A-Z])/).join(", "));
}

main("SplitMeIfYouCanHaHaYouCantOrYouCan");