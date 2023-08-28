import {cart, removeCart} from "./cart.js";
import {products} from "./products.js";


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

        <div class="product-price">$${(matchingProduct.priceCent) /100}</div>

        <div class="product-oldprice">$${(matchingProduct.oldpriceCent) /100}</div>

        <div class="quantity">quantity: ${cartItem.quantity}</div>

        <div class="in-stock">In stock</div>

        <div class="shop-chant">uShop Express</div>
      </div>

    </div>
  
    <div class="update-container">

      <button class="remove-button  js-remove-button" data-product-id = "${matchingProduct.id}">REMOVE</button>

      <div class="minus-plus-button-container">
        <button class="decrease-button">-</button>
        <button class="increase-button">+</button>
      </div>
    </div>
  </div>

 `
})


document.querySelector(".js-checkout-summary")
.innerHTML =
`   
  <div class="order-summary-wrapper">
    <div class="order-summary-container">
      <h2 class="order-summary-heading">Order Summary</h2>
      <div class="order-summary">
        <div class="items-description">Items (3):</div>
        <div class="items-price">$42.75</div>
      </div>
    
      <div class="order-summary">
        <div class="items-description">Shipping & handling:</div>
        <div class="items-price">$4.99</div>
      </div>
    
      <div class="order-summary">
        <div class="items-description">Total before tax:</div>
        <div class="items-price">$47.74</div>
      </div>
    
      <div class="order-summary">
        <div class="items-description">Estimated tax (10%):</div>
        <div class="items-price">$34.34</div>
      </div>
    
    </div>
    
    <div class="total-amount">Total Amount</div>
    
    <div class="total-price-container">
      <button class="checkout-button">CHECKOUT ($11.93)
      </button>
    </div> 
  </div>
  `



document.querySelector(".js-checkout-wrapper").innerHTML= checkoutHTML


document.querySelectorAll(".js-remove-button")
  .forEach((removeBtn)=>{
   removeBtn.addEventListener("click",()=>{
      const productId = removeBtn.dataset.productId;
       removeCart(productId);
      

    /* we use 'productId' for the DOM class instead, cause we have it already when we click the remove button*/
  
      const container = document.querySelector
      (`.js-container-grid-${productId}`);
        container.remove();
      
    })
  }) 

 