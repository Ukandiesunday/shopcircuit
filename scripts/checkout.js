import {cart, removeFromCart} from "./cart.js";
import {products} from "./products.js";
import { calculateMoney, calcInitialPrice, calcTax, calcTotalPrice} from "./utility/money.js";




let checkout = document.querySelector(".js-checkout-wrapper");

let matchingProduct;

cart.forEach((cartItem)=>{
 const productId = cartItem.productId

  // using id from cart to match id from products in order to get full details of each product from "products array".

 products.forEach((product)=>{
  if(productId === product.id){
    matchingProduct = product
  }
 })

  checkout.innerHTML+=
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
        <div class = "quantity-price">$${cartItem.quantity * matchingProduct.priceCent/100}</div>
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
    </div>

  </div>

 `

})


let amount = 0;
cart.forEach((cartItem)=>{
   cartItem.productId;
   products.forEach((product)=>{
     product.id
    if(product.id === cartItem.productId){
    amount += product.priceCent * cartItem.quantity;
    }
    
  })

})
 

let checkoutCartQty = 0;
 cart.forEach((cartItem)=>{
  checkoutCartQty += cartItem.quantity
})


   
let summary = document.querySelector(".js-checkout-summary");

summary.innerHTML =
`   
  <div class="order-summary-wrapper">
    <div class="order-summary-container">
      <h2 class="order-summary-heading">Order Summary</h2>
      <div class="order-summary">
        <div class="items-description">Items (${checkoutCartQty}):</div>
        <div class="items-price">$${calcInitialPrice(amount)}</div>
      </div>
    
      <div class="order-summary">
        <div class="items-description">Total before tax:</div>
        <div class="items-price">$${calcInitialPrice(amount)}</div>
      </div>
    
      <div class="order-summary">
        <div class="items-description">Estimated tax (10%):</div>
        <div class="items-price">$${calcTax(amount)}</div>
      </div>
    
    </div>
    
    <div class="total-amount-container">
      <div class="total-amount">Subtotal (excluding shipping)</div>
      <div class"items-price" id="subtotal">$${calcTotalPrice(amount)}</div>
    </div>

    <div class="total-price-container">
      
      <a href="checkout.html"><button class="order-button">Place Order
      </button></a>
      <a href="index.html" class="a-back-to-home"><button>Back To Home</button></a> 
    </div> 
  </div>

  `


document.querySelector('.js-cart-summary').innerHTML =`<h2>Cart Summary: $${calcTotalPrice(amount)}</h2>`



document.querySelector(".cart-total-quantity").innerHTML = checkoutCartQty;

document.querySelectorAll(".js-remove-button")
  .forEach((removeBtn)=>{
   removeBtn.addEventListener("click",()=>{
      const productId = removeBtn.dataset.productId;
       removeFromCart(productId);
    })
  }) 

 
 