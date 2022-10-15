let allItem = document.querySelector(".AllItems");
let cartItems = document.querySelector(".cart-items");
const count = document.querySelector('.count');
let currPrice = document.querySelector(".currentPrice");
let actPrice = document.querySelector(".free");
let totalPrice = document.querySelector(".TotalAmount");


// ---- Array for cart item ----
let cartArr = [];

let currentPrice = actualPrice = 0;


// ---- add cart in cartsection -----
function addCart() {
    let getCart = localStorage.getItem('cartItem');
    if (getCart === null) {
        cartArr = [];
    } else {
        cartArr = JSON.parse(getCart);
    }
    let query = ""
    cartArr.forEach((element,index) => {
         query += `<div class="itemInfo flex gap">
                    <div class="productImg">
                        <img src="${element.itemImg}" alt="">
                    </div>
                    <div class="item-content">
                        <a href="#">${element.itemName}</a>
                        <span>${element.itemDetail}</span>
                        <div class="price flex flex-wrap">
                            <p>${element.currentPrice}</p> <del>${element.actualPrice}</del> <span class="off">${element.offer}</span>
                        </div>
                        <a href="#" class="remove" onclick=deleteCart(${index})>REMOVE</a>
                    </div>
                </div>`;

            currentPrice+= parseInt(element.currentPrice.slice(1));
            actualPrice+= parseInt(element.actualPrice.slice(1));
      })       

   if(cartArr.length === 0)
     {
        cartItems.textContent = "Your cart is empty!"; 
        cartItems.style.justifyContent = "center";
        cartItems.style.fontWeight = "500";
        count.classList.remove("active");
        
     }else{
        allItem.innerHTML = query; 
        count.classList.add("active");
     }

    currPrice.textContent = `₹${actualPrice}`;
    actPrice.textContent = `- ₹${actualPrice - currentPrice}`;
    totalPrice.textContent = `₹${currentPrice}`;

}
addCart();


function countCart() {
    let getCart = localStorage.getItem('cartItem');

    if (getCart === null) {
        cartArr = [];
    } else {
        cartArr = JSON.parse(getCart);
        count.textContent = cartArr.length;
    }
    
}

countCart();




// ------ delete Cart ----

function deleteCart(index){
  cartArr.splice(index,1);
  localStorage.setItem('cartItem', JSON.stringify(cartArr));
  currentPrice = actualPrice = 0;
  addCart();
  countCart();
}