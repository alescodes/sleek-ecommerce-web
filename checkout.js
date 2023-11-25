let listCart = [];


  



function localStorage()
{ localStorage.getItem('cart')}{ carts = JSON.parse (localStorage.getItem('cart'))}

  
     
      function addCartToHTML(){
        let listCartHTML = document.querySelector('.returnCart .listCart');
        listCartHTML.innerHTML = '';
        let totalQuantityHTML = document.querySelector('.totalQuantity');
        let totalPriceHTML = document.querySelector('.totalPrice');

        let totalQuantity = 0;

        let totalPrice = 0; 


        // IF HAS PRODUCT IN CART
        if(listCart){
           listCart.forEach(product => {
            if(product){
                let newP = document.createElement('div');
                newP.classList.add('item');
                newP.innerHTML =
                ` <img ${product.image}" alt="">
                <div class="info">
                    <div class="name">${product.name}</div>
                    <div class="price">#${product.price}</div>
                </div>
                <div class="quantity">${product.quantity}</div>
                <div class="returnPrice">#${product.price * product.quantity}</div>`;
                listCartHTML.appendChild(newP);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + (product.price * product.quantity);
            }
           })
        }
        totalQuantityHTML.innerText = totalQuantity;
        totalPriceHTML.innerText = '#' + totalPrice;

    }
      