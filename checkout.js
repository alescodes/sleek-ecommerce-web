let carts = [];
let listcart = [];

function checkOut(){
    if(localStorage.getItem('cart')){carts = JSON.parse(localStorage.getItem('cart'));
    addCartToHTML();
  }
  }



  
   checkOut();
     addCartToHTML();
      function addToCart(carts){
        let listCartHTML = document.querySelector('.returnCart .list');
        listCartHTML.innerHTML = '';
        let totalQuantityHTML = document.querySelector('.totalQuantity');
        let totalPriceHTML = document.querySelector('.totalPrice');
       

        let totalQuantity = 0;

        let totalPrice = 0; 
        


        // IF HAS PRODUCT IN CART
        if(listcart){
           listcart.forEach(product => {
            if(listcart){
                let newP = document.createElement('div');
                newP.classList.add('item');
                newP.dataset.id = product.id;
               
                
                newP.innerHTML =
                ` <img src="${product.image}" alt="">
                <div class="info">
                    <div class="name">${product.name}</div>
                    <div class="price">\u{20A6}${info.price}</div>
                </div>
                <div class="quantity">${product.quantity}</div>
                <div class="returnPrice">\u{20A6}${product.price * product.quantity}</div>`;
                listCartHTML.appendChild(newP);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + (product.price * product.quantity);
            }
           })
        }
        totalQuantityHTML.innerText = totalQuantity;
        totalPriceHTML.innerText = '\u{20A6}' + totalPrice;

    }




