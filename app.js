import { createPlayer, addSolveTime, showStats } from "./utils/player_functionality.js";
import { askRiddle, meusureSolveTime } from "./utils/riddle_functionality.js";
import { allRiddles } from "./riddles/riddlesFile.js";
import readline from "readline-sync";


console.log("\n==Welcome to the Riddle Game!==\n");
const playerName = readline.question("Please enter your name: ");
const player = createPlayer(playerName);
const filteredRiddles = bonusFunction()
for (let i = 0; i < filteredRiddles.length; i++) {
    const riddle = filteredRiddles[i];
    const timeTaken = meusureSolveTime(() => askRiddle(riddle));
    addSolveTime(player, timeTaken);
    console.log(`You solved the riddle in ${timeTaken.toFixed(2)} seconds.\n`);
}
showStats(player);







// === BONUS ===
function bonusFunction() {
    console.log("\nHello " + player.name + "! You can choose one of the following options:");
    console.log("1. Play all riddles sorted by difficulty");
    console.log("2. Play only riddles of a specific difficulty (easy, medium, hard)");
    console.log("3. Play all riddles up to a certain difficulty (easy, medium, hard)");
    const difficultyChoice = readline.question("\nPlease choose a option : ").toLowerCase();
    let filteredRiddles = [];
    switch (difficultyChoice) {
        case "1":
            filteredRiddles = allRiddles.sort((a, b) => {
                const difficultyOrder = { easy: 1, medium: 2, hard: 3 };
                return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
            });
            break;
        case "2":
            const specificDifficulty = readline.question("Enter the difficulty level (easy, medium, hard): ").toLowerCase();
            filteredRiddles = allRiddles.filter(riddle => riddle.difficulty === specificDifficulty);
            break;
        case "3":
            const upToDifficulty = readline.question("Enter the maximum difficulty level (easy, medium, hard): ").toLowerCase();
            const difficultyLevels = { easy: 1, medium: 2, hard: 3 };
            filteredRiddles = allRiddles.filter(riddle => difficultyLevels[riddle.difficulty] <= difficultyLevels[upToDifficulty]);
            break;
        default:
            console.log("Invalid choice. Playing all riddles by default.");
            filteredRiddles = allRiddles;
            break;
    }
    return filteredRiddles
}