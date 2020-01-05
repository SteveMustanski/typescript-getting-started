/// <reference path="player.ts" />


function startGame() {

  let playerName: string | undefined = getInputValue('playername');
  logPlayer(playerName);

  postScore(100, playerName)

  postScore(-5, playerName)

}

function logPlayer(name: string = 'MultiMath Player') : void {
  console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementID: string): string | undefined {
  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

  return inputElement.value === '' ? undefined : inputElement.value;
}

function postScore(score: number, playerName: string = 'MultiMath Player'): void {

  let logger: (value: string) => void;

  score < 0 ? logger = logError : logger = logMessage;

  const scoreElement: HTMLElement | null = document.getElementById('postedScores');
  scoreElement!.innerText = `${score} - ${playerName}`

  logger(`Score: ${score}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

const logMessage = (message: string) => console.log(message);

function logError(err: string): void {
  console.error(err);
}

const firstPlayer: Player = new Player();
firstPlayer.name = 'Anna';

console.log(firstPlayer.formatName());