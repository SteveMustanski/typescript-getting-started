"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Scoreboard = (function () {
    function Scoreboard() {
        this.results = [];
    }
    Scoreboard.prototype.addResult = function (newResult) {
        this.results.push(newResult);
    };
    ;
    Scoreboard.prototype.updateScorboard = function () {
        var outputString = '<h2>Scoreboard</h2>';
        for (var index = 0; index < this.results.length; index++) {
            var result = this.results[index];
            outputString += '<h4>';
            outputString += result.playerName + ': ' + result.score + '/' + result.problemCount + ' for factor ' + result.factor;
            outputString += '</h4>';
        }
        var scoresElement = document.getElementById('scores');
        scoresElement.innerHTML = outputString;
    };
    return Scoreboard;
}());
exports.Scoreboard = Scoreboard;
//# sourceMappingURL=scoreboard.js.map