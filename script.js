var currentLevel = 0;
var gameLevel = parseInt(localStorage["level"])||0;
var game = document.getElementById("game")
changelevel(gameLevel)
function changelevel(level){
    if (level>gameLevel){
        game.src=`game/notunlocked.html`
        return
    }
    game.src = `game/${level}.html`
}
function advanceLevel(){
    if (currentLevel == gameLevel){
        gameLevel++
        currentLevel++
    } else if (currentLevel < gameLevel){
        currentLevel++
    } else{
        alert("This is an error that should never occur. You win!")
        return
    }
    changelevel(currentLevel)
    localStorage["level"] = gameLevel
}
function forwardLevel(){
    currentLevel++
    changelevel(currentLevel)
}
function backLevel(){
    currentLevel = Math.max(0, currentLevel-1)
    changelevel(currentLevel)
}
addEventListener("message",(e)=>{
    if (e.data = "advance"){
        advanceLevel()
    }
})