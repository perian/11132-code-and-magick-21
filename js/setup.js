'use strict';

const NAMES = [`Иван`, `Хуан`, `Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const WIZARDS_AMMOUNT = 4;
const wizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
const wizardList = document.querySelector(`.setup-similar-list`);

const createFeaturesList = () => {
  const wizardsFeatureArray = [];
  for (let i = 0; i < WIZARDS_AMMOUNT; i++) {
    const wizardFeatures = {
      name: window.utils.getRandomArrayElement(NAMES) + ` ` + window.utils.getRandomArrayElement(SURNAMES),
      coatColor: window.utils.getRandomArrayElement(COAT_COLORS),
      eyeColor: window.utils.getRandomArrayElement(EYES_COLORS)
    };
    wizardsFeatureArray.push(wizardFeatures);
  }
  return wizardsFeatureArray;
};

const wizardsFeatures = [] = createFeaturesList();

const createWizard = (wizard) => {
  const wizardElement = wizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyeColor;

  return wizardElement;
};

const fragment = document.createDocumentFragment();

for (let i = 0; i < wizardsFeatures.length; i++) {
  fragment.appendChild(createWizard(wizardsFeatures[i]));
}

wizardList.appendChild(fragment);

document.querySelector(`.setup-similar`).classList.remove(`hidden`);


const setupPlayer = document.querySelector(`.setup-player`);
const setupWizard = setupPlayer.querySelector(`.setup-wizard`);
const wizardCoat = setupWizard.querySelector(`.wizard-coat`);
const wizardEyes = setupWizard.querySelector(`.wizard-eyes`);
const fireball = setupPlayer.querySelector(`.setup-fireball-wrap`);
const wizardCoatInput = setupPlayer.querySelector(`input[name="coat-color"]`);
const wizardEyesInput = setupPlayer.querySelector(`input[name="eyes-color"]`);
const fireballInput = fireball.querySelector(`input[name="fireball-color"]`);

wizardCoat.addEventListener(`click`, function () {
  wizardCoatInput.value = window.utils.getRandomArrayElement(COAT_COLORS);
  wizardCoat.style.fill = wizardCoatInput.value;
});

wizardEyes.addEventListener(`click`, function () {
  wizardEyesInput.value = window.utils.getRandomArrayElement(EYES_COLORS);
  wizardEyes.style.fill = wizardEyesInput.value;
});

fireball.addEventListener(`click`, function () {
  fireballInput.value = window.utils.getRandomArrayElement(FIREBALL_COLORS);
  fireball.style.backgroundColor = fireballInput.value;
});
