"use strict";

(function () {
  const setupOpen = document.querySelector(`.setup-open`);
  const setupClose = document.querySelector(`.setup-close`);
  const setup = document.querySelector(`.setup`);
  const setupUserName = document.querySelector(`.setup-user-name`);
  const onEscEnterClose = (evt) => {
    if (evt.key === `Escape` || (evt.key === `Enter` && evt.target.matches(`.setup-close`))) {
      closePopup();
    }
  };

  const closePopup = () => {
    setup.classList.add(`hidden`);

    document.removeEventListener(`keydown`, onEscEnterClose);
  };

  setupClose.addEventListener(`click`, function () {
    closePopup();
  });

  const openPopup = () => {
    setup.classList.remove(`hidden`);

    document.addEventListener(`keydown`, onEscEnterClose);
  };

  setupUserName.addEventListener(`keydown`, function (evt) {
    if (evt.key === `Escape`) {
      evt.stopPropagation();
    }
  });// Если фокус находится на форме ввода имени, то окно не закрывается.

  setupOpen.addEventListener(`click`, function () {
    openPopup();
  });

  setupOpen.addEventListener(`keydown`, function () {
    openPopup();
  });
})();
