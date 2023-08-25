 export let  cart = [{
  productId: "id1",
  quantity:2,
},
  {
  productId:"id2",
  quantity:1
}];

export function updateCartForward(productId){

  // First push to cart.
  /*cart.push({
    productId:productId,
    quantity:1
    })*/

  //checking if productId in the product list is same as productId in the cart, to help us increase the cart quantity manually. That is, (update cart forward).

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
   
}


//To update cart backward
export function updateCartBackward(productId){
  let sameItem;

  cart.forEach((cartItem)=>{
    if(productId === cartItem.productId){ 
    sameItem = cartItem
    }
  })
  
  if(sameItem){
  sameItem.quantity-=1
    }else{
      cart.push({
      productId:productId,
      quantity:1
      })
    }


}

// To display cart total quantity on the page.
export function displayCartTotalQty(){
  let  totalQuantity = 0;
  cart.forEach((cart)=>{
    totalQuantity += cart.quantity

    if(totalQuantity <= 0){
      return false;
    }
      document.querySelector(".cart-total-quantity").innerHTML = totalQuantity;   
  })
}

/* pushing items to newCart while excluding items that don't match this 'productId' we get when clicking the remove button.
 */



 export function removeCart(productId){
  let newCart = [];

  cart.forEach((cartItem)=>{
    cartItem.productId;

    if(cartItem.productId !== productId){
      newCart.push(cartItem);
      
    }

  })

  cart = newCart;
  console.log(cart);
}




