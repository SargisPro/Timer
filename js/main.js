document.addEventListener('DOMContentLoaded', () => {
  const happy = new Date('Apr 16 2022 09:00:00');
  
  const daysVal = document.querySelector('.time-count__days .time-count__val');
  const hoursVal = document.querySelector('.time-count__hours .time-count__val');
  const minutesVal = document.querySelector('.time-count__minutes .time-count__val');
  const secoundVal = document.querySelector('.time-count__secound .time-count__val');


  const daysText = document.querySelector('.time-count__days .time-count__text');
  const hoursText = document.querySelector('.time-count__hours .time-count__text');
  const minutesText = document.querySelector('.time-count__minutes .time-count__text');
  const secoundText = document.querySelector('.time-count__secound .time-count__text');

  function declOfNum(number, titles) {  
    let cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number % 100 > 4 && number % 100 < 20)? 2 : cases[(number%10<5)?number%10:5] ];  
  };

  const timeCount = () => {
    let now = new Date();
    let leftUntil = happy - now;

    let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
    let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
    let secounds = Math.floor(leftUntil / 1000) % 60;


    daysVal.textContent = days;
    hoursVal.textContent = hours;
    minutesVal.textContent = minutes;
    secoundVal.textContent = secounds;


    daysText.textContent =  declOfNum(days, ['день', 'дня', 'дней']);
    hoursText.textContent =  declOfNum(hours, ['час', 'часа', 'часов']);
    minutesText.textContent =  declOfNum(minutes, ['минута', 'минуты', 'минут']);
    secoundText.textContent =  declOfNum(secounds, ['секунда', 'секунд', 'секунд']);
  };
  
  timeCount();
  setInterval(timeCount, 1000);
});