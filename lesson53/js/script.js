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
        //learInterval(modalTimerId);
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

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);

    //использование классов для карточек

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes=classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            if(this.classes.length==0){
                this.element='menu__item';
                element.classList.add(this.element);
            }
            else{
                this.classes.forEach(className=>element.classList.add(className));
            }
            element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                `;
            this.parent.append(element);
        }
    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container'
    ).render();
    

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        17,
        '.menu  .container'
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        14,
        '.menu .container'
    ).render();


    //forms

    const forms=document.querySelectorAll('form');

    const message={
        loading: 'Loading',
        success: 'Thank you , we will connect with you soon',
        failure: 'Error, something going wrong'
    };

    forms.forEach(item=>{
        console.log(item);
        postData(item);
    })



    function postData(form){
        form.addEventListener('submit',(e)=>{
            e.preventDefault();
            alert('tratata');
            const statusMessage=document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent=message.loading;
            form.append(statusMessage);

            const request=new XMLHttpRequest();
            request.open('POST','server.php');
           // request.setRequestHeader('Content-type','multipart/form-data');
            const formData=new FormData(form);
            request.send(formData);
            request.addEventListener('load',()=>{
                if(request.status===200){
                    console.log(request.response);
                    statusMessage.textContent=message.success;
                }
                else{
                    statusMessage.textContent=message.failure;
                }
            });

        });
    }



});