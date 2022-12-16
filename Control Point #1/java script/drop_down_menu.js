


const drop_down_link = document.querySelector('.drop_down_link');

const drop_down_menu = document.querySelector('.drop_down_menu');

const drop_down_menu_item_2 = document.querySelector('.drop_down_menu_item_2');

const drop_down_down = document.querySelector('.drop_down_down');

drop_down_link.addEventListener('mouseover', ()=>{
    drop_down_menu.style.display = 'block';
})



drop_down_menu_item_2.addEventListener('mouseover', ()=>{
    drop_down_down.style.display = 'block';
})

drop_down_menu.addEventListener('mouseleave', () =>{
    drop_down_menu.style.display = 'none';
})

drop_down_down.addEventListener('mouseleave', ()=>{
    drop_down_down.style.display = 'none';
})