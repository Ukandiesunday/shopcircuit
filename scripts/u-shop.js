 
import {cart, increment, decrement} from "./cart.js";
import {products} from "./products.js";


let shop = document.querySelector(".js-product-grid");

function renderHTML(){
products.forEach((product)=>{
  let {id, image, name, priceCent, unit, oldpriceCent, rating, } = product;

  let searchItem = cart.find((cartItem)=> cartItem.id === id)||[]; // To hold our quantity when refreshed;

 shop.innerHTML += ` 
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
      <div class="update" id="update-${id}">${searchItem.quantity === undefined ? 0 : search.quantity}</div>
      <button class="increase-btn js-increase-btn-${id}">+</button>
    </div>
    </div>

    <div class="shop-chant">uShop Express</div>

    <button class="add-to-cart-btn js-add-to-cart-btn" const data-product-id = ${id}>Add to cart</button>

  </div>
 ` 
});
}
renderHTML();

document.querySelectorAll(".js-add-to-cart-btn")
.forEach((button)=>{
  button.addEventListener("click",() => {
    const productId = button.dataset.productId;
    update(productId);
    updateCartTotalQty();
   
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

        decrement(productId);
        update(productId);
        updateCartTotalQty();
       })
    })
    
  
    // To increase cartQty when pressing plus (+) button 
    document.querySelectorAll(`.js-increase-btn-${productId}`)
    .forEach((increaseBtn)=>{
      increaseBtn.addEventListener("click",()=>{

      increment(productId)
        update(productId);
        updateCartTotalQty();
        addMessage();
      })
    })

   
  })
})

   // TO update each quantity in cart
function update(productId){
  let searchItem = cart.find((cartItem) =>
    cartItem.productId === productId
   );
   if(searchItem){
    document.getElementById(`update-${productId}`).innerHTML= searchItem.quantity;
   }
    updateCartTotalQty();
 
}

// To render cart total quantity on the page.
updateCartTotalQty()
function updateCartTotalQty(){
  let total = cart.map((cartItem)=>cartItem.quantity).reduce((x, y)=> x + y, 0);
document.querySelector(".cart-total-quantity").innerHTML = total;
}

 const open = document.getElementById("toggle-open");
 open.addEventListener("click",()=>{
  document.getElementById("dropdown-content").style.display = "block"
   open.style.display = "none"
 })

 const close = document.getElementById("toggle-close");

 close.addEventListener("click",()=>{
  document.getElementById("dropdown-content").style.display = "none"
   open.style.display="block";
 })



 const loader = document.getElementById("preloader");
 
 window.addEventListener("load",()=>{
  loader.style.display="none";
 })














