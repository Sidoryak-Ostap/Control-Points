
// Бургер
const burger_button = document.querySelector('.header_burger');

//Вікно бургера
const burger_menu_list = document.querySelector('.burger_menu');

//Посилання на якийсь дів
const burger_links = document.getElementsByClassName('burger_link');

//Кнопка закрити бургер
const burger_close_button = document.querySelector('.burger_close_button');



//При натисканні на бургер відобразити його вікно
burger_button.addEventListener('click', () =>{
    burger_menu_list.style.display = 'block';
    burger_button.style.opacity = '0';

})


// При натисканні на кнопку закрити вікно бургера
burger_close_button.addEventListener('click', ()=>{
    burger_menu_list.style.display = 'none';
    burger_button.style.opacity = '1';
    
})

//При натисканні на лінк, закрити вікно бургера і проскролити до потрібного місця

for(const link of burger_links)
{

        link.addEventListener('click', () =>{
            burger_menu_list.style.display = 'none';
            burger_button.style.opacity = '1';
        })

}




/*const drop_down = document.getElementById('drop_down');
const drop_down_list = document.querySelector('.drop_down_list');

drop_down.addEventListener('click', ()=>{
    if(drop_down_list.style.display = 'none')
    {
        drop_down_list.style.display = 'block';
    }
    else{
        drop_down_list.style.display = 'none';
    }
    
})*/


