'use strict';

const showC = document.querySelector('.btn');
const showD = document.querySelector('.showp');
const close = document.querySelector('.close');

close.addEventListener('click', function () {
  showD.classList.toggle('hidden');
});

showC.addEventListener('click', function () {
  showD.classList.toggle('hidden');
});
