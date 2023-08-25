import {cart, removeCart} from "./cart.js"
import {products} from "./products.js"

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
  <div class="container-grid js-container-grid" 
  data-product-id = "${matchingProduct.id}" >
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

      <button class="remove-button  js-remove-button"    data-product-id = "${matchingProduct.id}">REMOVE</button>

      <div class="minus-plus-button-container">
        <button class="decrease-button">-</button>
        <button class="increase-button">+</button>
      </div>

    </div>
    
  </div>
  `
})

document.querySelector(".js-wrapper").innerHTML= checkoutHTML

document.querySelectorAll(".js-remove-button")
  .forEach((remove)=>{
    remove.addEventListener("click",()=>{
      const productId = remove.dataset.productId;
      removeCart(productId);

      const container = document.querySelector
      (".js-container-grid");
      
      
    })
  })