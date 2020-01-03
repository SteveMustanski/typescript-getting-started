function startGame() {
  let messagesElement: HTMLElement = document.getElementById('messages')!;

  let playerName: string;
  playerName = 'undefined';
  logPlayer(playerName);

  messagesElement!.innerText = 'Welcome to MultiMath! Starting a new game.....';
}

function logPlayer(name:string) {
  console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);