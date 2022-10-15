const cartBtn = document.querySelectorAll(".cartBtn");
const count = document.querySelector('.count');


let cartArr = [];
let cartInfo = {};


for (const item of cartBtn) {
    item.addEventListener("click", () => {

        let cart = item.parentElement.parentElement;
        let Img = cart.previousElementSibling.firstElementChild;
        let index = Img.src.indexOf("img");
        Img = Img.src.slice(index);
        let itemName = cart.firstElementChild;
        let itemDetail = itemName.nextElementSibling;
        let currentPrice = itemDetail.nextElementSibling.firstElementChild;
        let actualPrice = currentPrice.nextElementSibling;
        let offer = actualPrice.nextElementSibling;

        let getCart = localStorage.getItem('cartItem');

        if (getCart === null) {
            cartArr = [];
        } else {
            cartArr = JSON.parse(getCart);
        }


        cartInfo.itemName = itemName.textContent;
        cartInfo.itemImg = Img;
        cartInfo.itemDetail = itemDetail.textContent;
        cartInfo.currentPrice = currentPrice.textContent;
        cartInfo.actualPrice = actualPrice.textContent;
        cartInfo.offer = offer.textContent;
        cartArr.push(cartInfo);
        localStorage.setItem('cartItem', JSON.stringify(cartArr));
        alert("successfully added");
        countCart();
    });
}

function countCart() {
    let getCart = localStorage.getItem('cartItem');

    if (getCart === null) {
        cartArr = [];
    } else {
        cartArr = JSON.parse(getCart);
    }

    if (cartArr.length === 0)
        count.classList.remove("active");
    else {
        count.classList.add("active");
        count.textContent = cartArr.length;
    }
}


countCart();






