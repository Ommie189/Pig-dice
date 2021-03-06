// BUSINESS LOGIC

// Creates a player and sets initial score to 0
function Player(playerName) {
  this.playerName;
  this.roll = 0;
  this.temporaryScore = 0;
  this.totalScore = 0;
};
// Creates random number
var randNumber = function() {
  return Math.floor(6 * Math.random()) + 1;
};
// Saves the number and then returns it
Player.prototype.rollone = function() {
  if (this.roll === 1) {
    this.temporaryScore = 0;
    alert("Sorry you rolled a 1!Your turn is over!")

  } else {
    this.temporaryScore += this.roll;
  }
}
// Allows the player to Hold
Player.prototype.hold = function() {
  this.totalScore += this.temporaryScore;
  this.temporaryScore = 0;
  alert("Your turn is over, pass the mouse!");
}
// Checks and notifies the player who has won
Player.prototype.winnerCheck = function() {
  if (this.totalScore >= 100) {
    alert("You are the winner!");
  }
}

// USER INTERFACE
$(document).ready(function() {
  var player1 = new Player("Player 1")
  var player2 = new Player("Player 2")

  // displays the player's roll count and temporaryScore
  $("button#player1-roll").click(function(event) {
    player1.roll = randNumber();
    $("#die-roll-1").text(player1.roll);
    player1.rollone();
    $("#round-total-1").text(player1.temporaryScore);
  });

  $("button#player2-roll").click(function(event) {
    player2.roll = randNumber();
    $("#die-roll-2").text(player2.roll);
    player2.rollone();
    $("#round-total-2").text(player2.temporaryScore);
  });

  //
  $("button#player1-hold").click(function(event) {
    player1.hold();
    $("#total-score-1").text(player1.totalScore);
    $("#round-total-1").empty();
    $("#die-roll-1").empty();
    player1.winnerCheck();
  });

  $("button#player2-hold").click(function(event) {
    player2.hold();
    $("#total-score-2").text(player2.totalScore);
    $("#round-total-2").empty();
    $("#die-roll-2").empty();
    player2.winnerCheck();
  });
});
