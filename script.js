'use strict';

const BIRTH_DATE = new Date(1992, 2, 18);

// Just for example:
const getAge = (birthDate) => {
  const currentDate = new Date(Date.now());
  const currentMonth = currentDate.getMonth();
  const birthMonth = birthDate.getMonth();
  const currentDay = currentDate.getDate();
  const birthDay = birthDate.getDate();

  let age = currentDate.getFullYear() - birthDate.getFullYear();

  if (currentMonth < birthMonth) {
    return --age;
  }
  if (currentMonth === birthMonth) {
    return currentDay >= birthDay ? age : --age;
  }
  return age;
};

const ageParagraph = document.querySelector('.years');
ageParagraph.insertAdjacentHTML('beforeend', getAge(BIRTH_DATE))
