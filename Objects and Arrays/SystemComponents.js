function main(input = []) {
    // For each the input
    let result = {};

    for(let line of input) {
        
        // Split the line on "|" and get the System, Component and Subcomponent
        let splitted = line.split(" | ");
        let system = splitted[0];
        let component = splitted[1];
        let subComponent = splitted[2];
        
        // Check if system exists
            // If exists - add component object to the system
            // If doesn't exists - add system with value of object, and add the component object to the system
                // If component exists - add the subcomponent 
                // If component doesn't exist - add the component and subcomponent 

        if (result[system] === undefined) {
            result[system] = {};
        }

        if (result[system][component] === undefined) {
            result[system][component] = [];
        }

        result[system][component].push(subComponent);
        
    }

    result = Object.entries(result).sort(([sys, comp] , [sys1, comp1]) => {
        const firstCondition = Object.keys(comp1).length - Object.keys(comp).length;
        if(firstCondition !== 0) {
            return firstCondition;
        }
        return sys.localeCompare(sys1);
    }).reduce((acc, [system, components]) => ({...acc, [system]: components}), {});

    for(let system of Object.keys(result)) {
 
        const sortedComponents = Object.entries(result[system]).sort(([, subcomp], [, subcomp1]) => {
            return subcomp1.length - subcomp.length; 
        }).reduce((acc, [k,v]) => ({...acc, [k]: v}), {});
        result[system] = sortedComponents;
    }

    for(let system of Object.keys(result)) {
        console.log(system);

        for(let component of Object.keys(result[system])) {
            console.log(`|||${component}`);
            
            for(let subComponent of result[system][component]) {
                console.log(`||||||${subComponent}`);
            }

        }
    }
}


main(['SULS | Main Site | Home Page',
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
'Lambda | CoreC | C5',
'Lambda | CoreC | C6',
'Lambda | CoreC | C7',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']);