let cart = document.querySelector('svg')
let counter=0
cart.addEventListener('click',()=>{
    if (counter==0) {
        counter=1
        let hidden = document.querySelector('.items')
        hidden.style.transition="all 1s"  
        hidden.style.transform=('translateX(0%)')  
    }
    else{
        counter=0
        let hidden = document.querySelector('.items')
        hidden.style.transition="all 1s"  
    hidden.style.transform=('translateX(-100%)') 
    }
})
let counterchocolate=0
let id =0;
let addtocart = document.querySelectorAll('div p + p')

addtocart.forEach((element)=>{
        element.addEventListener('click',()=>{
            
            if (counterchocolate<8 ) {
                counterchocolate++
                id++
                let div = document.querySelector('.items')
                const newDiv = document.createElement('div');
                 newDiv.setAttribute('id', `new`);
                 newDiv.setAttribute('style', `display:flex; text-align:center;`);
                 newDiv.innerHTML = `<p id="no" style="color:white;width:100%;text-center;" data-price='${element.dataset.price}'>${element.dataset.name12} and this price is ${element.dataset.price}</p>   ` 
                 div.appendChild(newDiv);
                 element.style.visibility="hidden"
            }
            else
            {
                alert('CART IS FULL')
            }
           
             let total = document.querySelectorAll('#no')
             let sum=0
              total.forEach(price=>{
                console.log(price);
               let pr = price.getAttribute('data-price')
               let final = parseInt(pr,10)
               sum+=final
              })
              let div = document.querySelector('#total')
              div.innerHTML=`Total:${sum}`
         }) 
    
    
   
})



