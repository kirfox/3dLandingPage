"use strict";
function countTimer(deadLine){
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
        let dateStop = new Date(deadLine).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60);
            
            return{timeRemaining, hours, minutes, seconds};
           
    }
    
    function updateClock() {
        let timer = getTimeRemaining();

        //add zero
        let addZero = function(num){
            if (num >= 0 && num < 10) { 
                  return '0' + num;
              } else {
                  return num;
              }
          };
        
        timerHours.textContent = addZero(timer.hours);
        timerMinutes.textContent = addZero(timer.minutes);
        timerSeconds.textContent = addZero(timer.seconds);

        if(timer.timeRemaining < 0){
            clearInterval(idInterval);

            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
      
    }
    
    let idInterval = setInterval(updateClock);
    
}

export default countTimer;