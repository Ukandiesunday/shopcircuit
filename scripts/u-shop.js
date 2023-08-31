 
import {cart, updateCartForward, updateCartBackward} from "./cart.js"

import {products} from "./products.js"


// To display cart total quantity on the page.

   function displayCartTotalQty(){
  let  totalQuantity = 0;
  cart.forEach((cart)=>{
    totalQuantity += cart.quantity

    if(totalQuantity <= 0){
      return false
    }

    document.querySelector(".cart-total-quantity").innerHTML = totalQuantity;
  })
  
}


let productHTML = "";

products.forEach((product)=>{

  let {id, image, name, priceCent, unit, oldpriceCent, rating, } = product
 productHTML+=` 
  <div class="product-container">

    <div class="image-container">
      <img src="${image}" alt="khaki-sneakers" class="product-image">
    </div>

    <div class="product-name">
        ${name} 
    </div>

    <div class"price-container">
    <div class="product-price">$${(priceCent)/100}</div>
    <div class="old-price">$${(oldpriceCent)/100}</div>
    
    </div>
    <div class="product-rating-container">
      <img src="images/icons/product-rating-${(rating.stars)*10}.png" alt="ratings" class="rating-stars">
      <div class="product-rating-count">(${rating.count})</div>
    </div>

    
    <div class="select-product-quantity">

      <div class="units-left">${unit} units left</div>

     <div class="toggle-container js-toggle-button-${id}">
      <button class="decrease-btn js-decrease-btn-${id}">-</button>
      <button class="increase-btn js-increase-btn-${id}">+</button>
    </div>
    </div>

    <div class="shop-chant">uShop Express</div>

    <button class="add-to-cart-btn js-add-to-cart-btn" const data-product-id = ${id}>Add to cart</button>

  </div>
 ` 
});

document.querySelector(".js-product-grid").innerHTML = productHTML;

document.querySelectorAll(".js-add-to-cart-btn")
.forEach((button)=>{
  button.addEventListener("click",()=>{
    
    const productId = button.dataset.Id;

    updateCartForward(productId);

    displayCartTotalQty();
    
    addMessage();


    function addMessage (){
        document.querySelectorAll(".js-add-to-cart-message").forEach((message)=>{
        message.style.display="block";
        setTimeout(()=>{
        message.style.display="none";

        },2000)
      })
    }    
    
    button.style.display="none"

    document.querySelector(`.js-toggle-button-${productId}`).style.opacity = "1"

   // To decrease cartQty via  minus (-) button
   document.querySelectorAll(`.js-decrease-btn-${productId}`)
    .forEach((decreaseBtn)=>{
      decreaseBtn.addEventListener("click",()=>{

        updateCartBackward(productId);

        displayCartTotalQty();
        
       })
     
    })
    

    // To increase cartQty via  plus (+) button instead
    document.querySelectorAll(`.js-increase-btn-${productId}`)
    .forEach((increaseBtn)=>{
      increaseBtn.addEventListener("click",()=>{

       updateCartForward(productId);

       displayCartTotalQty();

        addMessage();
      })
    })


  })
})

 



