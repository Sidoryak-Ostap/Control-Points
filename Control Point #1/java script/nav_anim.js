

const lines = document.querySelectorAll('.line');

const intro = document.querySelector('.intro');
const about = document.querySelector('.about');
const services = document.querySelector('.services');
const portfolio = document.querySelector('.portfolio');


const blog = document.querySelector('.blog');
const get_intocuh = document.querySelector('.get_intocuh');

document.addEventListener('scroll', ()=>{
    let scrollTop = window.scrollY;
    let introHeighTop = intro.offsetTop;

    
    let introHeightBottom = introHeighTop + intro.offsetHeight;

    let aboutHeightTop = about.offsetTop;
    let aboutHeightBottom = aboutHeightTop + about.offsetHeight;

    let servicesHeightTop = services.offsetTop;
    let servicesHeightBottom = servicesHeightTop + services.offsetHeight;

    let portfolioHeightTop = portfolio.offsetTop;
    let portfolioHeightBottom = portfolioHeightTop + portfolio.offsetHeight;

    let blogHeightTop = blog.offsetTop;
    let blogHeightBottom = blogHeightTop + blog.offsetHeight;

    let get_intocuhHeightTop = get_intocuh.offsetTop;
    let get_intocuhHeightBottom = get_intocuhHeightTop + get_intocuh.offsetHeight;

    

    if((scrollTop>=introHeighTop) && (scrollTop<=introHeightBottom))
    {
        lines[0].style.width = '80%';
    }
    else{
        lines[0].style.width = '0';
    }

    if((scrollTop>=aboutHeightTop) && (scrollTop<=aboutHeightBottom))
    {
        lines[1].style.width = '80%';
    }
    else{
        lines[1].style.width = '0';
    }

    if((scrollTop>=servicesHeightTop) && (scrollTop<=servicesHeightBottom))
    {
        lines[2].style.width = '80%';
    }
    else{
        lines[2].style.width = '0';
    }


    if((scrollTop>=portfolioHeightTop) && (scrollTop<=portfolioHeightBottom))
    {
        lines[3].style.width = '80%';
    }
    else{
        lines[3].style.width = '0';
    }

    if((scrollTop>=blogHeightTop) && (scrollTop<=blogHeightBottom))
    {
        lines[4].style.width = '80%';
    }
    else{
        lines[4].style.width = '0';
    }

    if((scrollTop>=get_intocuhHeightTop) && (scrollTop<=get_intocuhHeightBottom))
    {
        lines[6].style.width = '80%';
    }
    else{
        lines[6].style.width = '0';
    }
    
    
})



/*Header Anim*/
const header = document.querySelector('.header');


document.addEventListener('scroll', () =>{
    let scrollTop = window.scrollY;

    if(scrollTop>30)
    {
        header.classList.add('header_scroll')
    }
    else{
        header.classList.remove('header_scroll');
    }
})



/*To top Button */
const ToTopByutton = document.querySelector('.toTop');

document.addEventListener('scroll', ()=>{

    let scrollTop = window.scrollY;

    if(scrollTop>=150)
    {
        ToTopByutton.style.opacity = '1';
    }
    else{
        ToTopByutton.style.opacity = '0';
    }
})
