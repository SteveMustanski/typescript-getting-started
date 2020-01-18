import { Result } from './result';

export class Scoreboard {

  private results: Result[] = [];

  addResult(newResult: Result): void {
    this.results.push(newResult);
  };

  updateScorboard(): void {
    let outputString = '<h2>Scoreboard</h2>';

    for (let index = 0; index < this.results.length; index++) {
      const result: Result = this.results[index];
      outputString += '<h4>';
      outputString += result.playerName + ': ' + result.score + '/' + result.problemCount + ' for factor ' + result.factor;
      outputString += '</h4>'
    }

    const scoresElement: HTMLElement = document.getElementById('scores')!;
    scoresElement.innerHTML = outputString;
  }

}