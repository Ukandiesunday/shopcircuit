 
import {cart} from "./cart.js"
import {product} from "./products.js"
let productHTML = "";

product.forEach((product)=>{
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

      <div class="items-left">${product.itemLeft}items left</div>

      <select class="select-quantity-${product.id}">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
      <button class="next-product">Next</button>

    </div>

    <div class="shop-chant">uShop Express</div>

    <div class="added-to-cart-message js-add-to-cart-message">Product added to cart successfully</div>

    <button class="add-to-cart-btn js-add-to-cart-btn" const data-product-id = ${product.id}>Add to cart</button>

  </div>
 ` 
});

document.querySelector(".js-product-grid").innerHTML = productHTML;

document.querySelectorAll(".js-add-to-cart-btn")
.forEach((button)=>{
  button.addEventListener("click",()=>{
    
    const productId = button.dataset.productId
    /*cart.push({
      productId:productId,
      quantity:1})
      */

    //checking if productId in the product list is same as productId in the cart, to help us increase the quantity of cart. 
      let sameItem;
      cart.forEach((cartItem)=>{
      if(productId === cartItem.productId){ 
      sameItem = cartItem
      }
    })
    
    if(sameItem){
    sameItem.quantity+=1
      }else{
      cart.push({
      productId:productId,
      quantity:1
    })
    }

    let  totalQuantity = 0;
    cart.forEach((cart)=>{
      totalQuantity += cart.quantity
        document.querySelector(".cart-total-quantity").innerHTML = totalQuantity;
      
    })
     calculate();


  })
})


calculate();
function calculate(){
  let selectQty = 0;
   document.querySelectorAll(".select-quantity").forEach((select)=>{
    select.addEventListener("change",()=>{ 
      selectQty += Number(select.value);
      console.log(selectQty)
      document.querySelector(".cart-total-quantity").innerHTML = selectQty;
    })
  })
}


