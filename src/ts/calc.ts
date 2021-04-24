/* eslint-disable no-param-reassign */
export {};

const rangeElList = document.querySelectorAll('.js-range');

const classesRange = document.querySelector('.js-classes-range') as HTMLInputElement;
const merchRange = document.querySelector('.js-merch-range') as HTMLInputElement;

const incomeLabelEl = document.querySelector('.js-income') as HTMLSpanElement;
const profitLabelEl = document.querySelector('.js-profit') as HTMLSpanElement;

let income: number;
let profit: number;

let classesCurrentStep = 4;
let merchCurrentStep = 4;

const calcResult = () => {
  income = Number(classesRange.value) * 2500 + Number(merchRange.value) * 3000;
  profit = income * 0.4;
  incomeLabelEl.textContent = income.toLocaleString();
  profitLabelEl.textContent = (profit).toLocaleString();
};

calcResult();

rangeElList.forEach(el => {
  const rangeEl = el as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  const currentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, #f3a925 0%, #f3a925 ${String(
    (currentStep / steps) * 100,
  )}%, #d3d3d3 ${String((currentStep / steps) * 100)}%, #d3d3d3 100%)`;
});

classesRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  classesCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, #f3a925 0%, #f3a925 ${String(
    (classesCurrentStep / steps) * 100,
  )}%, #d3d3d3 ${String((classesCurrentStep / steps) * 100)}%, #d3d3d3 100%)`;

  calcResult();
});

merchRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  merchCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, #f3a925 0%, #f3a925 ${String(
    (merchCurrentStep / steps) * 100,
  )}%, #d3d3d3 ${String((merchCurrentStep / steps) * 100)}%, #d3d3d3 100%)`;

  calcResult();
});
