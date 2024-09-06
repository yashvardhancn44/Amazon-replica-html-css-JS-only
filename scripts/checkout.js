import { cart, removeFromCart, getCartQuantity } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

let cartSummaryHTML = "";

cart.forEach((cartItem) => {
  const matchingProduct = getMatchingProduct(cartItem.productId);

  cartSummaryHTML += `
        <div class="cart-item-container js-cart-item-container-${
          matchingProduct.id
        }">
          <div class="delivery-date">
            Delivery date: Tuesday, June 21
          </div>

          <div class="cart-item-details-grid">
            <img class="product-image" src="${matchingProduct.image}">

            <div class="cart-item-details">
              <div class="product-name">
                ${matchingProduct.name}
              </div>
              <div class="product-price">
                $${formatCurrency(matchingProduct.priceCents)}
              </div>
              <div class="product-quantity">
                <span>
                  Quantity: <span class="quantity-label">${
                    cartItem.quantity
                  }</span>
                </span>
                <span class="update-quantity-link js-update-quantity-link link-primary" data-product-id="${
                  matchingProduct.id
                }">
                  Update
                </span>
                <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${
                  matchingProduct.id
                }">
                  Delete
                </span>
              </div>
            </div>

            <div class="delivery-options">
              <div class="delivery-options-title">
                Choose a delivery option:
              </div>
              <div class="delivery-option">
                <input type="radio" checked class="delivery-option-input" name="delivery-option-${
                  matchingProduct.id
                }">
                <div>
                  <div class="delivery-option-date">
                    Tuesday, June 21
                  </div>
                  <div class="delivery-option-price">
                    FREE Shipping
                  </div>
                </div>
              </div>
              <div class="delivery-option">
                <input type="radio" class="delivery-option-input" name="delivery-option-${
                  matchingProduct.id
                }">
                <div>
                  <div class="delivery-option-date">
                    Wednesday, June 15
                  </div>
                  <div class="delivery-option-price">
                    $4.99 - Shipping
                  </div>
                </div>
              </div>
              <div class="delivery-option">
                <input type="radio" class="delivery-option-input" name="delivery-option-${
                  matchingProduct.id
                }">
                <div>
                  <div class="delivery-option-date">
                    Monday, June 13
                  </div>
                  <div class="delivery-option-price">
                    $9.99 - Shipping
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  `;
});

document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;

updateCartQuantity(); // there is no Naming conflict because of use of Modules.
function updateCartQuantity() {
  const cartQuantity = getCartQuantity(cart);
  if (cartQuantity === 0) {
    document.querySelector(
      ".js-checkout-header-middle-section"
    ).innerHTML = `Checkout (<a class="return-to-home-link" href="amazon.html"></a>)`;
  } else {
    document.querySelector(
      ".js-checkout-header-middle-section"
    ).innerHTML = `Checkout (<a class="return-to-home-link" href="amazon.html">${cartQuantity}</a>)`;
  }
}

document
  .querySelectorAll(".js-update-quantity-link")
  .forEach((updateLinkElement) => {
    const productId = updateLinkElement.dataset.productId;
    updateLinkElement.addEventListener("click", () => {});
  });

//1. Remove product from cart
//2. Remove product from page
document.querySelectorAll(".js-delete-link").forEach((deleteLink) => {
  const productId = deleteLink.dataset.productId;
  deleteLink.addEventListener("click", () => {
    removeFromCart(productId);
    const container = document.querySelector(
      `.js-cart-item-container-${productId}`
    );
    container.remove();
    updateCartQuantity();
  });
});

// console.log(cartSummaryHTML);

function getMatchingProduct(productId) {
  let matchingProduct;
  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });
  return matchingProduct;
}
