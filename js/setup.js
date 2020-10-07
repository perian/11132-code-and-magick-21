'use strict';

const NAMES = [`Иван`, `Хуан`, `Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYE_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARDS_AMMOUNT = 4;
const wizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
const wizardList = document.querySelector(`.setup-similar-list`);

let setup = document.querySelector(`.setup`);
setup.classList.remove(`hidden`);

const getRandomInt = (maxInt) => {
  let randomInt = Math.floor(Math.random() * maxInt);
  return randomInt;
};

const getRandomArrayElement = (array) => {
  return array[getRandomInt(array.length)];
};

const createFeaturesList = () => {
  const wizardsFeatureArray = [];
  for (let i = 0; i < WIZARDS_AMMOUNT; i++) {
    let wizardFeatures = {
      name: getRandomArrayElement(NAMES) + ` ` + getRandomArrayElement(SURNAMES),
      coatColor: getRandomArrayElement(COAT_COLORS),
      eyeColor: getRandomArrayElement(EYE_COLORS)
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
