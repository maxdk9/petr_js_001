"use strict"
document.addEventListener('DOMContentLoaded', () => {
    let tabs = document.querySelectorAll('.tabheader__item');
    let tabsContent = document.querySelectorAll('.tabcontent');
    let tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });

    }

    function showTabContent(i = 0) {

        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        //event.preventDefault();
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


    function getZero(num) {
        if (num > 0 && num < 10) {
            return `0${num}`;
        } else {
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

    setClock('.timer', deadLine);

    //modal
    const dataModals = document.querySelectorAll('[data-modal]');
    const modalWindow = document.querySelector('.modal');
    const modalClostBtn = document.querySelectorAll('[data-close]');

    dataModals.forEach((elem) => {
        elem.addEventListener('click', openModal);
    });


    function openModal() {
        modalWindow.classList.add('show');
        modalWindow.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }


    function closeModal() {
        modalWindow.classList.add('hide');
        modalWindow.classList.remove('show');
        document.body.style.overflow = '';
    }


    modalClostBtn.forEach((closeButtonEl) => {
        closeButtonEl.addEventListener('click', closeModal);
    });

    modalWindow.addEventListener('click', (e) => {
        if (e.target === modalWindow) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
    //const modalTimerId=setTimeout(openModal,3000);

    function showModalByScroll(){
        if(window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight){
            openModal();
            window.removeEventListener('scroll',showModalByScroll);
        }
    }


    window.addEventListener('scroll',showModalByScroll);
});
