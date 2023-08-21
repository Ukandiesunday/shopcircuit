 export const  cart = [];

export function updateCartForward(productId){

  /*cart.push({
    productId:productId,
    quantity:1
    })*/

  //checking if productId in the product list is same as productId in the cart, to help us increase the cart quantity manually.(update cart forward).

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


export function displayCartTotalQty(){
  let  totalQuantity = 0;
  cart.forEach((cart)=>{
    totalQuantity += cart.quantity
      document.querySelector(".cart-total-quantity").innerHTML = totalQuantity;   
  })

}




