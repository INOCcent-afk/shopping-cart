const cartNum = document.getElementById("cart-number");
const cartWindow = document.querySelector(".cart");
const cartCloseWindow = document.getElementById("cart-close-window");
const addToCart = document.querySelectorAll(".purchase");
const shop = document.querySelector(".shop");
const cartItems = document.querySelector(".cart-items");
const clear = document.querySelector(".removeAll");

addToCart.forEach((add) => {
  add.addEventListener("click", showCart);
});

cartCloseWindow.addEventListener("click", closeCart);

// cartClose
function closeCart() {
  cartWindow.style.transform = "translateX(100%)";
  shop.style.padding = "100px 5% 100px 5%";
}

// cartOpen
let cartCount = 1;

function showCart(e) {
  cartNum.innerHTML = cartCount;
  cartWindow.style.transform = "translateX(0)";
  shop.style.padding = "100px 400px 100px 5%";

  let itemsInfo = e.target.parentNode;
  let addedItemP = document.createElement("p");
  let addedItemH = document.createElement("h1");
  let addedItem = document.createElement("div");

  itemsInfoHeading = itemsInfo.childNodes[1].textContent;
  itemsInfoPrice = itemsInfo.childNodes[3].textContent;

  addedItem.className = "addedItem";
  addedItemP.textContent = itemsInfoPrice;
  addedItemH.textContent = itemsInfoHeading;
  addedItem.style.height = "100px";
  addedItem.style.width = "300px";
  addedItem.style.margin = "20px 0";

  addedItem.appendChild(addedItemH);
  addedItem.appendChild(addedItemP);
  cartItems.appendChild(addedItem);

  cartCount++;
}

cartNum.addEventListener("click", () => {
  cartWindow.style.transform = "translateX(0)";
  shop.style.padding = "100px 400px 100px 5%";
});
