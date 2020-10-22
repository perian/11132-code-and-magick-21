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
    window.utils.onEscEvt(evt, function () {
      evt.stopPropagation();
    });
  });

  setupOpen.addEventListener(`click`, function () {
    openPopup();
  });

  setupOpen.addEventListener(`keydown`, function () {
    openPopup();
  });


  const popupHandle = setup.querySelector(`.upload`);

  popupHandle.addEventListener(`mousedown`, (evt) => {
    evt.preventDefault();

    let startCoordinates = {
      x: evt.clientX,
      y: evt.clientY,
    };

    let dragged = false;

    const onMouseMove = (moveEvt) => {
      moveEvt.preventDefault();

      dragged = true;

      let shiftCoordinates = {
        x: startCoordinates.x - moveEvt.clientX,
        Y: startCoordinates.y - moveEvt.clientY,
      };

      startCoordinates = {
        x: shiftCoordinates.clientX,
        y: shiftCoordinates.clientY,
      };

      setup.style.top = (setup.offsetTop - shiftCoordinates.y) + `px`;
      setup.style.left = (setup.offsetLeft - shiftCoordinates.x) + `px`;
    };


    const onMouseUp = (upEvt) => {
      upEvt.preventDefault();

      popupHandle.removeEventListener(`mouseup`, onMouseUp);
      popupHandle.removeEventListener(`mousemove`, onMouseMove);

      if (dragged) {
        const onClickPreventDefault = (clickEvt) => {
          clickEvt.preventDefault();
          popupHandle.removeEventListener(`click`, onClickPreventDefault);
        };
        popupHandle.addEventListener(`click`, onClickPreventDefault);
      }
    };

    popupHandle.addEventListener(`mousemove`, onMouseMove);
    popupHandle.addEventListener(`mouseup`, onMouseUp);
  });


  // диалог должен начинать двигаться за курсором мыши при нажатии (mousedown) на блок .upload;
  // диалог должен переставать двигаться за курсором мыши при отпускании (mouseup) кнопки мыши и оставаться на новом месте;
  // при повторном открытии/закрытии диалога, положение диалога должно сбрасываться на изначальное.
})();
