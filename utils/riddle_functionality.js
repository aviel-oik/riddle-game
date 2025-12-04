import readline from "readline-sync";

export function askRiddle(riddleObj) {
    let correctAnswer = false
    while (!correctAnswer) {
        console.log(`\nRiddle: ${riddleObj.name}`)
        console.log(riddleObj.taskDescription)
        for (let key in riddleObj)
            if (key === "choices")
                riddleObj.choices.forEach((choice, index) => { console.log(`${index}: ${choice}`) });
        const userAnswer = readline.questionInt("Please enter your answer : ");
        if (userAnswer == riddleObj.correctAnswer) {
            console.log("Correct answer!")
            correctAnswer = true
        }
        else
            console.log("Wrong answer, try again.")
    }
}

export function meusureSolveTime(fn) {
    const startTime = Date.now();
    fn();
    const endTime = Date.now();
    const timeDiffInSeconds = (endTime - startTime) / 1000;
    return timeDiffInSeconds;
}