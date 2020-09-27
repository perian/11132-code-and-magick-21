'use strict';

let CLOUD_WIDTH = 420;
let CLOUD_HEIGHT = 270;
let CLOUD_X = 100;
let CLOUD_Y = 10;
let GAP = 10;

let font = {
  SIZE: `16px`,
  FONT_FAMILY: `PT Mono`,
  GAP: `16`
};

let TEXT_HEIGHT = 16;
let TEXT_GAP = 20;

let BAR_GAP = 50;
let BAR_WIDTH = 40;
let BAR_HEIGHT_MAX = 150;
let BAR_Y = CLOUD_HEIGHT - TEXT_HEIGHT;

let renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

let getMaxElement = (arr) => {
  let maxElement = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = (ctx, players, times) => {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);

  ctx.font = `${font.SIZE} ${font.FAMILY}`;
  ctx.fillStyle = `#000`;
  ctx.fillText(
      `Ура вы победили! `,
      CLOUD_X + TEXT_GAP,
      CLOUD_Y + TEXT_GAP + TEXT_HEIGHT
  );
  ctx.fillText(
      `Список результатов: `,
      CLOUD_X + TEXT_GAP,
      CLOUD_Y + TEXT_GAP + TEXT_HEIGHT + TEXT_GAP
  );

  let maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {
    ctx.fillStyle = `#000`;
    ctx.fillText(
        players[i],
        CLOUD_X + TEXT_GAP + (BAR_WIDTH + BAR_GAP) * i,
        CLOUD_HEIGHT
    );
    ctx.fillText(
        Math.ceil(times[i]),
        CLOUD_X + TEXT_GAP + (BAR_WIDTH + BAR_GAP) * i,
        BAR_Y - TEXT_HEIGHT - (BAR_HEIGHT_MAX * times[i]) / maxTime
    );

    if (players[i] === `Вы`) {
      ctx.fillStyle = `#ff0000`;
    } else {
      let hsl = `hsl(` + 233 + `,` + (100 * Math.random()) + `%,` + (100 * Math.random()) + `%)`;
      ctx.fillStyle = hsl;
    }

    ctx.fillRect(
        CLOUD_X + TEXT_GAP + (BAR_WIDTH + BAR_GAP) * i,
        BAR_Y,
        BAR_WIDTH,
        -1 * (BAR_HEIGHT_MAX * times[i]) / maxTime
    );
  }
};
