import {cart} from "./cart.js"
import {products} from "./products.js"

let matchingProduct;


let checkoutHTML = "";

cart.forEach((cartItem)=>{
 const productId = cartItem.productId
 
 products.forEach((product)=>{
  if(productId === product.id){
    matchingProduct = product
  }
 })
  checkoutHTML+=
  `
  <div class="container-grid">
    <div class="product-container-grid">

      <div class="product-image-container">
        <img src="${matchingProduct.image}" alt="khaki-shoe" width="100" height="100" class="product-image">
      </div>

      <div class="product-description-container">

        <div class="product-name">${matchingProduct.name}</div>

        <div class="product-price">$${(matchingProduct.priceCent) /100}</div>

        <div class="product-oldprice">$${(matchingProduct.oldpriceCent) *10}</div>

        <div class="quantity">quantity:2</div>

        <div class="in-stock">In stock</div>

        <div class="shop-chant">uShop Express</div>
      </div>

    </div>
  
    <div class="update-container">
      <div class="delete-container"><img src="" alt="delete-icon" class="remove">REMOVE</div>

      <div class="btn-container">
        <button class="decrease-button">-</button>
        <button class="increase-button">+</button>
      </div>
    </div>
    
  </div>
  `
  document.querySelector(".js-wrapper").innerHTML= checkoutHTML
})