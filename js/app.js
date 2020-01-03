"use strict";
function startGame() {
    var messagesElement = document.getElementById('messages');
    var playerName;
    playerName = 'undefined';
    logPlayer(playerName);
    messagesElement.innerText = 'Welcome to MultiMath! Starting a new game.....';
}
function logPlayer(name) {
    console.log("New game starting for player: " + name);
}
document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=app.js.map