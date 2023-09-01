import {cart, removeFromCart} from "./cart.js";
import {products} from "./products.js";
import { calculateMoney, calcInitialPrice, calcTax, calcTotalPrice} from "./utility/money.js";

let checkoutCartQty = 0;
cart.forEach((cartItem)=>{
 checkoutCartQty += cartItem.quantity
})


let checkoutHTML = "";

let matchingProduct;

cart.forEach((cartItem)=>{
 const productId = cartItem.productId

  // using id from cart to match id from products in order to get full details of each product from "products array".

 products.forEach((product)=>{
  if(productId === product.id){
    matchingProduct = product
  }
 })


  checkoutHTML+=
  `
  <div class="items-container
  js-container-grid-${matchingProduct.id}">
    <div class="product-container-grid">

      <div class="product-image-container">
        <img src="${matchingProduct.image}" alt="khaki-shoe" width="100" height="100" class="product-image">
      </div>


      <div class="product-description-container">

        <div class="product-name">${matchingProduct.name}</div>

        <div class="product-price">$${calculateMoney(matchingProduct.priceCent)}</div>

        <div class = "quantity-price">$${cartItem.quantity*matchingProduct.priceCent/100}</div>

        <div class="product-oldprice">$${calculateMoney(matchingProduct.oldpriceCent)}</div>

        <div class="quantity">quantity: ${cartItem.quantity}</div>

        <div class="in-stock">In stock</div>

        <div class="shop-chant">uShop Express</div>
      </div>

    </div>
  
    <div class="update-container">

    <a href="checkout.html">
    <button class="remove-button  js-remove-button" data-product-id = "${matchingProduct.id}">REMOVE</button>
    </a>

      <div class="minus-plus-button-container">
        <button id="decrease-button" class="decrease-button">-</button>
        <button id="increase-button" class="increases-button">+</button>
      </div>
    </div>
  </div>
  </div>
 `
})


// update()
// function update(productId){
//   let searchItem = cart.find((cartItem) =>
//     cartItem.productId === productId
//    );
//    if(searchItem){
//     document.getElementById(`update-${productId}`).innerHTML= 
//     searchItem.quantity;
//    }


  
//  }


 let priceCent = 0;
 cart.forEach((cartItem)=>{
   cartItem.productId;
   products.forEach((product)=>{
     product.id
    if(product.id === cartItem.productId){
    priceCent += product.priceCent * cartItem.quantity;
    }
    
      })
 })
 
   
  

document.querySelector(".js-checkout-summary")
.innerHTML =
`   
  <div class="order-summary-wrapper">
    <div class="order-summary-container">
      <h2 class="order-summary-heading">Order Summary</h2>
      <div class="order-summary">
        <div class="items-description">Items (${checkoutCartQty}):</div>
        <div class="items-price">$${calcInitialPrice(priceCent)}</div>
      </div>
    
      <div class="order-summary">
        <div class="items-description">Total before tax:</div>
        <div class="items-price">$${calcInitialPrice(priceCent)}</div>
      </div>
    
      <div class="order-summary">
        <div class="items-description">Estimated tax (10%):</div>
        <div class="items-price">$${calcTax(priceCent)}</div>
      </div>
    
    </div>
    
    <div class="total-amount-container">
      <div class="total-amount">Cost of product after tax</div>
      <div class"items-price">$${calcTotalPrice(priceCent)}</div>
    </div>

    <div class="total-price-container">
      
  <a href="checkout.html"><button class="checkout-button">PLACE ORDER
  </button></a>
    </div> 
  </div>
  `
  
document.querySelector(".cart-total-quantity").innerHTML = checkoutCartQty;

document.querySelector(".js-checkout-wrapper").innerHTML= checkoutHTML


document.querySelectorAll(".js-remove-button")
  .forEach((removeBtn)=>{
   removeBtn.addEventListener("click",()=>{
      const productId = removeBtn.dataset.productId;
       removeFromCart(productId);
       
  
    /* We target 'productId' from the remove button instead*/
      const container = document.querySelector
      (`.js-container-grid-${productId}`);
        container.remove();
        
    })
  }) 

 