document.addEventListener('DOMContentLoaded',()=>{
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent =document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');
    function hideTabContent(){
        tabsContent.forEach(item=>{
            item.classList.add('hide');
            item.classList.remove('show');
        });
        tabs.forEach(tab=>{
            tab.classList.remove('tabheader__item_active');
        });

    }

    function showTabContent(i=0){
        
        tabs[i].classList.add('show');
        tabs[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_activea');
    }

    hideTabContent();
    showTabContent();
    
    tabsParent.addEventListener('click',(event)=>{
       // event.preventDefault();
        const target=event.target;
        if(target&&target.classList.contains('tabheader__item')){
            tabs.forEach((item,i)=>{
                if(target==item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }


    });
});