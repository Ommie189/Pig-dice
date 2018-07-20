// BUSINESS LOGIC

// Creates a player and sets initial score to 0
function Player(playerName) {
  this.playerName = ;
  this.roll = 0;
  this.temporaryScore = 0;
  this.totalScore = 0;
  this.turn = turn;
}
// Creates random number
var randNumber = function() {
  Math.floor(Math.random() * 6) + 1;
}
// Saves the number and then returns it
Player.prototype.rollone = function() {
  if (this.roll === 1) {
    this.tempscore = 0;
    alert("Sorry" + this.playerName + ",you rolled a 1!Your turn is over!")

  } else {
    this.tempScore += this.roll;
  }
}
// Allows the player to Hold
Player.prototype.hold = function() {
  this.totalScore += this.temporaryScore;
  this.temporaryScore = 0;
  alert(this.playerName + ",your turn is over, pass the mouse!");
}
// Checks and notifies the player who has won
Player.prototype.hold = function() {
  if (this.totalScore >= 100; alert(this.playerName + "You are the winner!");
  }
}


}
