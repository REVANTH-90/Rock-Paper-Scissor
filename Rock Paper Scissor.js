const scores = JSON.parse(localStorage.getItem('scores')) || {
  win: 0,
  lose: 0,
  tie: 0,
};

updatescore();

function playtrick(playermove) {
  const computermove = pickcomputermove();
  let result = '';

  if (playermove === 'Scissors') {
    if (computermove === 'Rock') result = 'You Lose';
    else if (computermove === 'Scissors') result = 'Tie';
    else result = 'You Win';
  } else if (playermove === 'Paper') {
    if (computermove === 'Rock') result = 'You Win';
    else if (computermove === 'Scissors') result = 'You Lose';
    else result = 'Tie';
  } else if (playermove === 'Rock') {
    if (computermove === 'Rock') result = 'Tie';
    else if (computermove === 'Scissors') result = 'You Win';
    else result = 'You Lose';
  }

  if (result === 'You Win') scores.win++;
  else if (result === 'You Lose') scores.lose++;
  else scores.tie++;

  localStorage.setItem('scores', JSON.stringify(scores));
  updatescore();

  document.querySelector('.js-mymove').innerHTML = `${result}`;
  document.querySelector('.js-computermove').innerHTML = `You 
    <img src="${playermove}-emoji.png" class="imagecss"> 
    <img src="${computermove}-emoji.png" class="imagecss"> Computer`;
}

function updatescore() {
  document.querySelector('.js-score').innerHTML = 
    `Wins: ${scores.win}, Losses: ${scores.lose}, Ties: ${scores.tie}`;
}

function pickcomputermove() {
  const randompick = Math.random();
  if (randompick < 1 / 3) return 'Rock';
  else if (randompick < 2 / 3) return 'Scissors';
  else return 'Paper';
}

function resetScore() {
  scores.win = 0;
  scores.lose = 0;
  scores.tie = 0;
  localStorage.removeItem('scores');
  updatescore();
}
