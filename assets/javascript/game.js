let numResets = document.querySelector("#num-resets");
const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", function (){
    console.log("reset Button clicked");
teamOneNumshots.innerHTML = team1shots = 0
teamTwoNumshots.innerHTML = team2shots = 0
teamOneNumgoals.innerHTML = team1goals = 0
teamTwoNumgoals.innerHTML = team2goals = 0
resetValue = Number(numResets.innerHTML) +1;
numResets.innerHTML = resetValue;
})
team1shots = 0
team1goals = 0
team2shots = 0
team2goals = 0


let teamOneNumshots = document.querySelector("#teamone-numshots");
let teamOneNumgoals = document.querySelector("#teamone-numgoals");
const teamOneShootButton = document.querySelector("#teamone-shoot-button");
teamOneShootButton.addEventListener("click", function (){
teamOneNumshots.innerHTML = team1shots += 1
let random = Math.random()
if (random >0.5){
    teamOneNumgoals.innerHTML = team1goals += 1

}


})



const teamTwoNumshots = document.querySelector("#teamtwo-numshots");
const teamTwoNumgoals = document.querySelector("#teamtwo-numgoals");
const teamTwoShootButton = document.querySelector("#teamtwo-shoot-button")
teamTwoShootButton.addEventListener("click", function (){


let teamTwoShotValue = Number(teamTwoNumshots.innerHTML) +1;
teamTwoNumshots.innerHTML = team2shots += 1
let random = Math.random()
if (Math.random() >0.5){
    teamTwoNumgoals.innerHTML = team2goals += 1

}
})
