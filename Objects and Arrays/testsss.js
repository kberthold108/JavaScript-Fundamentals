// Helper Functions
const sortSystems = ([s1, c1], [s2, c2]) => Object.keys(c2).length - Object.keys(c1).length || s1.localeCompare(s2);
const sortComponents = ([, sc1], [, sc2]) => sc2.length - sc1.length;

const addPrefix = (prefix, times, str) => prefix.repeat(times) + str;

const sortObject = (obj, sortFunc) => {
    return Object.entries(obj)
        .sort(sortFunc)
        .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
};
​
const aggregateInput = (acc, [system, component, subcomponent]) => {
    if (!acc.hasOwnProperty(system)) {
        acc[system] = {};
    }
    if (!acc[system].hasOwnProperty(component)) {
        acc[system][component] = [];
    }
    acc[system][component].push(subcomponent);
    return acc;
};
​
const print = (result) => {
    Object.entries(result).forEach(([system, components]) => {
        console.log(system);
        Object.entries(components).forEach(([component, subcomponent]) => {
            console.log(addPrefix("|", 3, component));
            console.log(subcomponent.map(sc => addPrefix("|", 6, sc)).join("\n"));
        });
    });
}
​
// First solution
function main(input = []) {
    let result = input
        .map(line => line.split(" | "))
        .reduce(aggregateInput, {});
​
    result = sortObject(result, sortSystems);
​
    Object.keys(result).forEach(system => {
        const sortedComponents = sortObject(result[system], sortComponents);
        result[system] = sortedComponents;
    });
​
    print(result);
};
​
// Second solution
function main2(input = []) {
    const result = input
        .map(line => line.split(" | "))
        .reduce(aggregateInput, {});
​
    Object.keys(result)
        .sort((sys1, sys2) => Object.keys(result[sys2]).length - Object.keys(result[sys1]).length || sys1.localeCompare(sys2))
        .forEach(system => {
            console.log(system);
            Object.keys(result[system])
                .sort((comp1, comp2) => result[system][comp2].length < result[system][comp1].length)
                .forEach(component => {
                    console.log(addPrefix("|", 3, component));
                    console.log(result[system][component].map(sc => addPrefix("|", 6, sc)).join("\n"));
                    
                });
        });
};
​
​
main2(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Lambda | CoreC | C4',
    'Lambda | CoreC | C4',
    'Lambda | CoreC | C4',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);