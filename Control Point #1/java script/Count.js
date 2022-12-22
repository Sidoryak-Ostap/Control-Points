


const counters = document.querySelectorAll('.staitistics_item_counter');
const statistics = document.querySelector('.statistics');
work = true;

document.addEventListener('scroll', () =>{s
    let scrollY=window.scrollY;
    let statisticsOffsetTop = statistics.offsetTop-300;

    if(scrollY>=statisticsOffsetTop && work)
    {
        counters.forEach((counter) =>{
            counter.innerText = '0';
            
        
            const updateCounter = () =>{
                const target = +counter.getAttribute('data-target');
                const c = +counter.innerText;
        
                const increment = target/600;
        
                if(c < target)
                {
                    counter.innerText = `${Math.ceil(c+increment)}`;
                    setTimeout(updateCounter, 20);
                }
                if(c==target)
                {
                    work = false;
                }

            }
        
            updateCounter();
        })
    }
   
})
