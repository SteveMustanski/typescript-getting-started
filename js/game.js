"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utility_1 = require("./utility");
var scoreboard_1 = require("./scoreboard");
var Game = (function () {
    function Game(player, problemCount, factor) {
        this.player = player;
        this.problemCount = problemCount;
        this.factor = factor;
        this.scoreboard = new scoreboard_1.Scoreboard;
    }
    Game.prototype.displayGame = function () {
        var gameForm = '';
        for (var index = 1; index < this.problemCount + 1; index++) {
            gameForm += '<div class="form-group">';
            gameForm += '<label for="answer' + index + '" class="col-sm-2 control-label">';
            gameForm += String(this.factor) + ' x ' + index + ' = </label';
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + index + '" size="5" /></div>';
            gameForm += '</div>';
        }
        var gameElement = document.getElementById('game');
        gameElement.innerHTML = gameForm;
        document.getElementById('calculate').removeAttribute('disabled');
    };
    Game.prototype.calclateScore = function () {
        var score = 0;
        for (var index = 1; index < this.problemCount + 1; index++) {
            var answer = Number(utility_1.getValue('answer' + index));
            if (index * this.factor === answer) {
                score++;
            }
        }
        var result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        };
        this.scoreboard.addResult(result);
        this.scoreboard.updateScorboard();
        document.getElementById('calculate').setAttribute('disabled', 'true');
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.js.map