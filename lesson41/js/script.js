"use strict"
document.addEventListener('DOMContentLoaded', () => {
    //tabs
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });
        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });

    }

    function showTabContent(i = 0) {

        tabs[i].classList.add('show');
        tabs[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_activea');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        // event.preventDefault();
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }


    });
    //Timer
    const deadLine = '2021-08-01';

    function getTimeRemaining(endTime) {

        console.log("current time "+new Date());

        const endDateD= new Date(Date.parse(endTime));
        console.log(endDateD);

        console.log("end time year = "+ endDateD.getFullYear()+" month ="+endDateD.getMonth()+" day = "+endDateD.getDay());
        const t = Date.parse(endTime) - Date.parse(new Date());
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((t / (1000 * 60)) % 60);
        const seconds = Math.floor((t / 1000) % 60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };

    }


    function getZero(num){
        if(num>0&&num<10){
            return `0${num}`;
        }
        else{
            return num;
        }
    }

    function setClock(selector, endtime) {

        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        const timeInterval = setInterval(updateClock, 1000);
        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }

        }

    }

    setClock('.timer',deadLine);



});