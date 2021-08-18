function main(input) {
    let unique = new Set(input)
    let array = [...unique]

    array.sort((a, b) =>  a.length - b.length || a.localeCompare(b))
    for (let i in array) {
        console.log(array[i])
    }
}


main(['Ashton',
'Kutcher',
'Ariel',
'Lilly',
'Keyden',
'Aizen',
'Billy',
'Braston'])