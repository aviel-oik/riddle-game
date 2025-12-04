
export function createPlayer(name) {
    let newPlayer
    return newPlayer = {
        name: name,
        times: []
    }
}

export function addSolveTime(player, seconds) {
    player.times.push(seconds)
}

export function showStats(player) {
    let totalTime = 0
    player.times.forEach(element => { totalTime += element });
    const avgTimePerRiddle = totalTime / player.times.length
    console.log(`Player: ${player.name}`)
    console.log(`Riddles solved: ${player.times.length}`)
    console.log(`Total time: ${totalTime} seconds`)
    console.log(`Average time per riddle: ${avgTimePerRiddle.toFixed(2)} seconds\n`)
}

