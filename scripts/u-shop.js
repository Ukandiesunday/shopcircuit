
let productHTML = "";
product.forEach((procuct)=>{
 productHTML+=` 
    <div class="product-container">

  <div class="image-container">
    <img src="${product.image}" alt="khaki-sneakers" class="product-image">
  </div>

  <div class="product-name">
      ${product.name} 
  </div>

  <div class="product-price">${(product.priceCent)/100}</div>
  <div class="old-price">${(product.oldPriceCent)/100}</div>

  <div class="product-rating-container">
    <img src="images/product-rating-stars.png" alt="ratings" class="rating-stars">
    <div class="product-rating-count"></div>
  </div>

  
  <div class="select-product-quantity">

    <div class="items-left">items left</div>
    <select>
      <option selected value="1">1</option>
      <option value="1">2</option>
      <option value="1">3</option>
      <option value="1">4</option>
      <option value="1">5</option>
    </select>
    <button class="next-product">Next</button>

  </div>

  <div class="shop-chant">uShop Express</div>

  <div class="added-to-cart-message">Product added to cart successfully</div>

  <button class="add-to-cart-btn">Add to cart</button>

  </div>
 ` 
})

document.querySelector(".js-product-grid").innerHTML = productHTML;
console.log(productHTML);