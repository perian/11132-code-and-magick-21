'use strict';

let CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;

const font = {
  SIZE: `16px`,
  FONT_FAMILY: `PT Mono`,
  GAP: `16`
};

const TEXT_HEIGHT = 16;
const TEXT_GAP = 20;

const BAR_GAP = 50;
const BAR_WIDTH = 40;
const BAR_HEIGHT_MAX = 150;
const BAR_Y = CLOUD_HEIGHT - TEXT_HEIGHT;

const renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = (arr) => {
  let maxElement = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

const hsl = () => `hsl(` + 233 + `,` + (100 * Math.random()) + `%,` + (100 * Math.random()) + `%)`;

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

  const maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {
    const BAR_X = CLOUD_X + TEXT_GAP + (BAR_WIDTH + BAR_GAP) * i;
    const TIME_Y = BAR_Y - TEXT_HEIGHT - (BAR_HEIGHT_MAX * times[i]) / maxTime;
    const BAR_HEIGHT = -(BAR_HEIGHT_MAX * times[i]) / maxTime;

    ctx.fillStyle = `#000`;

    ctx.fillText(players[i], BAR_X, CLOUD_HEIGHT);

    ctx.fillText(Math.ceil(times[i]), BAR_X, TIME_Y);


    if (players[i] === `Вы`) {
      ctx.fillStyle = `#ff0000`;
    } else {
      ctx.fillStyle = hsl();
    }

    ctx.fillRect(BAR_X, BAR_Y, BAR_WIDTH, BAR_HEIGHT);
  }
};
