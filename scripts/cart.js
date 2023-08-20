 export const  cart = [];

export function updateCart(productId){
  //checking if productId in the product list is same as productId in the cart, to help us increase the quantity of cart. 
    let sameItem;
    cart.forEach((cartItem)=>{
    if(productId === cartItem.productId){ 
    sameItem = cartItem
    }
  })
  

  if(sameItem){
    updateCart(sameItem);
  sameItem.quantity+=1
    }else{
      cart.push({
      productId:productId,
      quantity:1
      })
    }
}