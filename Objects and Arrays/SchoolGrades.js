//get the name grade and score and store them
//check if score is higher then 3
    //if yes he goes in the next grade
//sort them by grades ascending and print avg score

function main(input) {
    const schoolRegister = {};

    for (let i = 0; i < input.length; i++) {

        // eslint-disable-next-line prefer-const
        let [, student,, grade,, score] = input[i].split(/: |, /).filter(t => t !== "");
        grade = Number(grade);
        score = Number(score);
        if (score < 3) {
            continue;
        }
    
        
        if (!schoolRegister[grade]) {
            schoolRegister[grade] ={};
        }
        schoolRegister[grade][student] = score;
        

    }

    Object.keys(schoolRegister)
        .sort((a, b) => a - b)
        .forEach(grades => { 
            console.log(`${Number(grades) + 1} Grade `);
            console.log(`List of students: ${Object.keys(schoolRegister[grades]).join(", ")}`);
            const avgScoreAll = (Object.values(schoolRegister[grades]).reduce((acc, cur) => acc += cur)) / (Object.keys(schoolRegister[grades]).length);
            console.log(`Average annual grade from last year: ${avgScoreAll.toFixed(2)}`);
            console.log("");
        });



}

main(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
"Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
"Student name: George, Grade: 8, Graduated with an average score: 2.83",
"Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
"Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
"Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
"Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
"Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
"Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
"Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
"Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
"Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]);