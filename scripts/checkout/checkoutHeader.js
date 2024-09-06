import { cart, getCartQuantity } from "../../data/cart.js";

export function renderCheckoutHeader() {
  const cartQuantity = getCartQuantity() || "";
  const checkoutHeaderHTML = `
  Checkout (<a class="return-to-home-link" href="amazon.html">${cartQuantity}</a>)
  `;
  document.querySelector(".js-checkout-header-middle-section").innerHTML =
    checkoutHeaderHTML;
}
