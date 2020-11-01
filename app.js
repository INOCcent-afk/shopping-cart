const cartNum = document.getElementById("cart-number");
const cartWindow = document.querySelector(".cart");
const cartCloseWindow = document.getElementById("cart-close-window");
const addToCart = document.querySelectorAll(".purchase");
const shop = document.querySelector(".shop");
const cartItems = document.querySelector(".cart-items");
const clear = document.querySelector(".removeAll");
const item = document.querySelectorAll(".item");

addToCart.forEach((add) => {
  add.addEventListener("click", showCart);
});

cartCloseWindow.addEventListener("click", closeCart);

// cartClose
function closeCart() {
  cartWindow.classList.remove("cartWindowStyle");
  shop.classList.remove("shopStyle");
}

// cartOpen
let cartCount = 1;

function showCart(e) {
  cartNum.innerHTML = cartCount;
  cartWindow.classList.add("cartWindowStyle");
  shop.classList.add("shopStyle");
  e.target.disabled = true;

  let itemsInfo = e.target.parentNode;
  let addedItemP = document.createElement("p");
  let addedItemH = document.createElement("h1");
  let addedItem = document.createElement("div");
  let addQuantity = document.createElement("button");
  let substractQuantity = document.createElement("button");
  let removeItem = document.createElement("button");

  itemsInfoHeading = itemsInfo.childNodes[1].textContent;
  itemsInfoPrice = itemsInfo.childNodes[3].textContent;

  addedItem.className = "addedItem";
  addQuantity.className = "addQuantity";
  substractQuantity.className = "substractQuantity";
  removeItem.className = "removeItem";

  addedItemP.textContent = itemsInfoPrice;
  addedItemH.textContent = itemsInfoHeading;
  addedItemH.className = addedItemH.textContent.toLowerCase();
  addQuantity.innerHTML = "+";
  substractQuantity.innerHTML = "-";
  removeItem.innerHTML = "remove";

  addedItem.style.height = "100px";
  addedItem.style.width = "300px";
  addedItem.style.margin = "20px 0";

  addedItem.appendChild(addedItemH);
  addedItem.appendChild(addedItemP);
  cartItems.appendChild(addedItem);
  addedItem.appendChild(addQuantity);
  addedItem.appendChild(substractQuantity);
  addedItem.appendChild(removeItem);

  removeItem.addEventListener("click", (e) => {
    e.target.parentNode.style.display = "none";
    let checkName = e.target.parentNode.childNodes[0].className;
    let arr = [];
    item.forEach((itm) => {
      arr.push(itm.classList[1]);
    });

    console.log(arr);
  });

  cartCount++;
}

cartNum.addEventListener("click", () => {
  cartWindow.classList.toggle("cartWindowStyle");
  shop.classList.toggle("shopStyle");
});
