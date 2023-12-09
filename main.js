

// navbar

const nav = document.querySelector(".nav");

window.onscroll = function () {
  var top = window.scrollY;
  console.log(top);
  if (top >= 100) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
};

const button = document.getElementById("my-button");
const navItems = document.getElementById("nav_items");

button.addEventListener("click", () => {
  navItems.classList.toggle("show");
});
// end of nav bar



// slide show

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



const stars = document.querySelectorAll(".bx");
console.log(stars);

stars.forEach((star, index1) => {
  star.addEventListener("mouseover", () => {
    stars.forEach((star, index2) => {
      index1 >= index2 ?
       (star.style.transform = "scale(1.2)"): 
       (star.style.transform = "scale(1)");
    });
    // star.style.transform = "scale(1.5)";
  });
  star.addEventListener("mouseout", () => {
    star.style.transform = "scale(1)";
  });
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});



// for file/receipts


  var openFile = function(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('output');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  };


// end of file




// let rating = document.getElementsByClassName('.fa')

// rating.addEventListener('click', () => {
//   rating.classList.replace('checked', 'fa');
// })

 
// })




// let iconCart = document.querySelector(".icon-cart");
// let closeCart = document.querySelector(".close");
// let body = document.querySelector("body");
// let listProductHTML = document.querySelector(".listproduct");
// let listCartHTML = document.querySelector(".listCart");
// let iconCartSpan = document.querySelector(".icon-cart span");

// let listproducts = [];
// let carts = [];




// iconCart.addEventListener("click", () => {
//   body.classList.toggle("showCart");
// });

// closeCart.addEventListener("click", () => {
//   body.classList.toggle("showCart");
// });

// const addDataToHTML = () => {
//   listProductHTML.innerHTML = '';
//   if (listproducts.length > 0){
//     listproducts.forEach(product => {
//       let newProduct = document.createElement("div");
//       newProduct.classList.add("item");
//       newProduct.dataset.id = product.id;
//       newProduct.innerHTML = ` 
//        <img src="${product.image}" alt="">
//        <h2>${product.name}</h2>
//        <div class="price">
//         #${product.price}</div>
//         <p class="list-line"></p>
//         <p>${product.description}</p>
//         <button class="addCart">Add To Cart</button>
//         `;

//       listProductHTML.appendChild(newProduct);
     
//     });
//   }
// }


// listProductHTML.addEventListener("click", (event) => {
//   let positionClick = event.target;
//   if (positionClick.classList.contains("addCart")) {
//     let product_id = positionClick.parentElement.dataset.id;
//     addToCart(product_id);
//   }
// })
// // let listCart = [];
// const addToCart = (product_id) => {

//   let positionThisProductInCart = carts.findIndex( 
//     (value) => value.product_id == product_id
//   );
//   if(carts.length <= 0) {
    
//     carts = [
//       {
//         product_id: product_id,
//         quantity: 1
        
//       }
//     ]
//   } else if (positionThisProductInCart < 0) {
    
//     carts.push({
//       product_id: product_id,
//       quantity: 1
//     });
//   } else {
//     carts[positionThisProductInCart].quantity =
//       carts[positionThisProductInCart].quantity + 1;
//   }

//   addCartToHTML();
//   addCartToMemory();
// }
// const addCartToMemory = () => {
//   localStorage.setItem('cart', JSON.stringify(carts));
// }
// const addCartToHTML = () => {
//   listCartHTML.innerHTML ='';
//   let totalQuantity = 0;
//   // i just added this
//   // remove if it doesn't work
//   if (carts.length > 0) {
//     carts.forEach(cart => {
//       totalQuantity = totalQuantity + cart.quantity;
//       let newCart = document.createElement("div");
//       newCart.classList.add("item");
//       newCart.dataset.id = cart.product_id;
//       let positionProduct = listproducts.findIndex((value) => value.id == cart.product_id);
//       let info = listproducts[positionProduct];
//       newCart.innerHTML = ` 
//       <div class="image">
//             <img src="${info.image}" alt="">
//          </div>
//          <div class="name">${info.name}
//          </div>
//         <div class="totalprice">
//           #${info.price * cart.quantity}
//         </div>
//         <div class="quantity">
//         <span class="minus"><</span>
//         <span>${cart.quantity}</span>
//         <span class="plus">></span>
//         </div>
//       `;
      

//       listCartHTML.appendChild(newCart);
    
//     })
    
    
//   }
//   iconCartSpan.innerText = totalQuantity;
// } 

// listCartHTML.addEventListener('click', (event) => {
//   let positionClick = event.target;
//   if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
//      let product_id = positionClick.parentElement.parentElement.dataset.id;
//     let type = 'minus';
//     if(positionClick.classList.contains('plus')){
//       type = 'plus';
//     }
//     changeQuantity(product_id, type);
//   }
// })
// const changeQuantity = (product_id, type) => {
//   let positionItemInCart = carts.findIndex((value) => value.product_id == product_id);
//   if(positionItemInCart >= 0){
//     switch (type) {
//       case 'plus':
//            carts[positionItemInCart].quantity = carts[positionItemInCart].quantity + 1;
//          break;

//       default:
//         let valueChange = carts[positionItemInCart].quantity - 1;
//         if(valueChange > 0){
//           carts[positionItemInCart].quantity = valueChange;
//         }
        
//         else{
//           carts.splice(positionItemInCart, 1);
//         }
//         break;
//     }
//   }
//   addCartToMemory();
//   addCartToHTML();
// }
// const initApp = () => {
//   // to get product data
//   fetch("products.json")
//     .then((response) => response.json())
//     .then((data) => {
//       listproducts = data;
//       // console.log(listproducts);
//       addDataToHTML();

//       // get cart from memory
//       if(localStorage.getItem('cart')){
//         carts = JSON.parse(localStorage.getItem('cart'));
//         addCartToHTML();
//       }
//     })
// }
// initApp();
// 

// let timeSave = "expires = Thu, 31 Dec 2025 23:59:59 UTC";
// document.cookie = "listCart="+JSON.stringify(listCart)+"; "+timeSave+"; path=/;";

// window.onclick = function(){
//     var truet = window.onclick;
//     console.log(target);
//     if(true >= 1){
//         fa.classList.add('checked')
//     }else{
//         fa.classList.remove('checked')
//     }
// }

//   const navItems = document.querySelector('#nav_items');
// const openNavBtn = document.querySelector('#open_nav-btn');
// const closeNavBtn = document.querySelector('#close_nav-btn');

// openNavBtn.addEventListener('click',() => {
//     navItems.style.display = 'flex';
//     openNavBtn.style.display = 'none';
//     closeNavBtn.style.display = 'inline-block';
// })

// // =========== THIS WORKS FOR THE CLOSING OF THE NAV ASWELL=============

// // closeNavBtn.addEventListener('click', () => {
// //     navItems.style.display = 'none';
// //     openNavBtn.style.display = 'inline-block';
// //     closeNavBtn.style.display = 'none';
// // })

// const closeNav = () => {
//     navItems.style.display = 'none';
//     openNavBtn.style.display = 'inline-block';
//     closeNavBtn.style.display = 'none';
// }

// closeNavBtn.addEventListener('click', closeNav);

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }

//   // Close the dropdown if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }

// const carouselItems = document.querySelectorAll('.carousel-item');
// let currentIndex = 0;

// function showSlide(index) {
//   // Hide all carousel items
//   carouselItems.forEach(item => {
//     item.style.display = 'none';
//   });

//   // Show the slide at the specified index
//   carouselItems[index].style.display = 'block';
// }

// function nextSlide() {
//   currentIndex = (currentIndex + 1) % carouselItems.length;
//   showSlide(currentIndex);
// }

// function previousSlide() {
//   currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
//   showSlide(currentIndex);
// }

// // Show the first slide initially
// showSlide(currentIndex);

// // Set up event listeners for next and previous buttons
// document.getElementById('nextBtn').addEventListener('click', nextSlide);
// document.getElementById('prevBtn').addEventListener('click', previousSlide);

// const navEl = document.querySelector ('nav');
// window.addEventListener('scroll', () => {
// if(window.scrollY > 50) {
//     navEl.classList.add('active')
// }else {
//     navEl.classList.remove('active')
// }
// })

// var navEl = document.getElementById ('nav');
// window.addEventListener('scroll', () => {
// if(window.scrollY > 50) {
//     navEl.classList.add('.scroll')
// }
// })

// var myNav = document.getElementById("nav")
// window.onscroll = function () {
//     "use strict";
//     if(document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280){
//         myNav.classList.add ("scroll");
//     } else {
//         myNav.classList.remove("scroll")
//     }
// }

// $(document).ready(function() {

//     $(window).scroll(function() {

//         let height = $('#navbar').height();
//         let scrollTop = $(window).scrollTop();

//         if (scrollTop >= height - 40) {
//             $('.nav-container').addClass('solid-nav');
//         } else {
//             $('.nav-container').removeClass('solid-nav');
//         }

//     });
// });

// universal function
// function sayHello (){
//     alert('Hello, Sleek Shopper');
// }

// window.sayHello();

// nav function

// prevent text copying

// const body = document.querySelector('body');

document.addEventListener("copy", (e) => {
  e.preventDefault();
  alert("Text copy not allowed !");
});

// alert when form button is submitted

// const form = document.querySelector("form");
// document.addEventListener("submit", (e) => {
//   e.preventDefault();
//   alert("Form Submitted");
// });

// const navItems = document.querySelector('#nav_items');
// const openNavBtn = document.querySelector('#open_nav-btn');
// const closeNavBtn = document.querySelector('#close_nav-btn');

// openNavBtn.addEventListener('click',() => {
//     navItems.style.display = 'flex';
//     openNavBtn.style.display = 'none';
//     closeNavBtn.style.display = 'inline-block';
// })

// // =========== THIS WORKS FOR THE CLOSING OF THE NAV ASWELL=============

// closeNavBtn.addEventListener('click', () => {
//     navItems.style.display = 'none';
//     openNavBtn.style.display = 'inline-block';
//     closeNavBtn.style.display = 'none';
// })

// const closeNav = () => {
//     navItems.style.display = 'none';
//     openNavBtn.style.display = 'inline-block';
//     closeNavBtn.style.display = 'none';
// }

// closeNavBtn.addEventListener('click', closeNav);
