 
import {cart, updateCartForward, updateCartBackward,  displayCartTotalQty } from "./cart.js"

import {products} from "./products.js"

let productHTML = "";

products.forEach((product)=>{
 productHTML+=` 
  <div class="product-container">

    <div class="image-container">
      <img src="${product.image}" alt="khaki-sneakers" class="product-image">
    </div>

    <div class="product-name">
        ${product.name} 
    </div>

    <div class="product-price">$${(product.priceCent)/100}</div>
    <div class="old-price">$${(product.oldpriceCent)/100}</div>

    <div class="product-rating-container">
      <img src="images/icons/product-rating-${(product.rating.stars)*10}.png" alt="ratings" class="rating-stars">
      <div class="product-rating-count">(${product.rating.count})</div>
    </div>

    
    <div class="select-product-quantity">

      <div class="items-left">${product.unit} units left</div>

     <div class="toggle-container">
      <button class="decrease-btn js-decrease-btn-${product.id}">-</button>
      <button class="increase-btn js-increase-btn-${product.id}">+</button>
    </div>
    </div>

    <div class="shop-chant">uShop Express</div>

    <button class="add-to-cart-btn js-add-to-cart-btn" const data-product-id = ${product.id}>Add to cart</button>

  </div>
 ` 
});

document.querySelector(".js-product-grid").innerHTML = productHTML;

document.querySelectorAll(".js-add-to-cart-btn")
.forEach((button)=>{
  button.addEventListener("click",()=>{
    
    const productId = button.dataset.productId;

    updateCartForward(productId);

    displayCartTotalQty();
    
    cartMessage();


    function cartMessage (){
        document.querySelectorAll(".js-add-to-cart-message").forEach((message)=>{
        message.style.display="block";
        setTimeout(()=>{
        message.style.display="none";
        },2000)
      })
    }    
    
    button.style.display="none"

   // To decrease cartQty from  minus (-) button
   document.querySelectorAll(`.js-decrease-btn-${productId}`)
    .forEach((decreaseBtn)=>{
      decreaseBtn.addEventListener("click",()=>{

        updateCartBackward(productId);

        displayCartTotalQty()

       })
     
    })
    

    // To increase cartQty from  plus (+) button instead
    document.querySelectorAll(`.js-increase-btn-${productId}`)
    .forEach((increaseBtn)=>{
      increaseBtn.addEventListener("click",()=>{

       updateCartForward(productId);

       displayCartTotalQty();

        cartMessage();
      })
    })


  })
})







