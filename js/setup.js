'use strict';

const names = [`Иван`, `Хуан`, `Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const surnames = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const coatColors = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const eyeColors = [`black`, `red`, `blue`, `yellow`, `green`];
let wizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
let wizardList = document.querySelector(`.setup-similar-list`);

let setup = document.querySelector(`.setup`);
setup.classList.remove(`hidden`);

let getRandomFeature = (array) => {
  let randomInt = Math.floor(Math.random() * array.length);
  return array[randomInt];
};

let wizards = [
  {
    name: getRandomFeature(names) + ` ` + getRandomFeature(surnames),
    coatColor: getRandomFeature(coatColors),
    eyeColor: getRandomFeature(eyeColors)
  },
  {
    name: getRandomFeature(names) + ` ` + getRandomFeature(surnames),
    coatColor: getRandomFeature(coatColors),
    eyeColor: getRandomFeature(eyeColors)
  },
  {
    name: getRandomFeature(names) + ` ` + getRandomFeature(surnames),
    coatColor: getRandomFeature(coatColors),
    eyeColor: getRandomFeature(eyeColors)
  },
  {
    name: getRandomFeature(names) + ` ` + getRandomFeature(surnames),
    coatColor: getRandomFeature(coatColors),
    eyeColor: getRandomFeature(eyeColors)
  }
];


let createWizard = (wizard) => {
  let wizardElement = wizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyeColor;

  return wizardElement;
};

let fragment = document.createDocumentFragment();

for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(createWizard(wizards[i]));
}

wizardList.appendChild(fragment);

document.querySelector(`.setup-similar`).classList.remove(`hidden`);
