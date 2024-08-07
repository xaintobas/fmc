'use strict';

// Get the Date object
const dateObj = new Date();
const year = dateObj.getUTCFullYear();
const month = dateObj.getMonth();
const day = dateObj.getDay();

// Get the HTML elements 
const birthDay = document.getElementById('day');
const birthMonth =  document.getElementById('month');
const birthYear = document.getElementById('year');
const yearsOld = document.querySelector('.yearsOld');
const monthsOld = document.querySelector('.monthsOld');
const daysOld = document.querySelector('.daysOld');
const btnCal = document.querySelector('.button');

// const calculateAge =  function() {
//   document.getElementById('day').value;
// }

btnCal.addEventListener('click', function () {
  const myYears = year - Number(birthYear.value);
  const myDays = day - Number(birthDay.value);

  const myMonths = (Number(birthMonth.value) < month) ? month - Number(birthMonth.value) : Number(birthMonth.value) - month;

  console.log(`Years ${myYears}, Month ${myMonths} Days ${myDays}`);

  yearsOld.textContent = myYears;
  monthsOld.textContent = myMonths;


})

