import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
// import "../data/cart-class.js";
// import "../data/backend-practice.js";
import { loadCart } from "../data/cart.js";

console.log(loadProductsFetch());

async function loadPage() {
  try {
    // throw 'error1'; // we can give any value, it will skip directly to catch.
    await loadProductsFetch();
    await new Promise((resolve, reject) => {
      // throw "error2";
      loadCart(() => {
        // reject("error3");
        resolve();
      });
    });
  } catch (error) {
    console.log("Unexpected Error. Please try Again");
  }

  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
}
loadPage();

/*
//practicing Async Await
async function loadPage() {
  console.log("load page");
  await loadProductsFetch(); // instead of loadProductsFetch().then(()=>{})
  return "value2"; // this line is equivalent to resolve('value2') which can be used in .then((value)=>{})
}
loadPage().then((value) => {
  console.log("next step");
  console.log(value);
});
*/

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve("value2");
    });
  }),
]).then((values) => {
  console.log("rendered");
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
});
*/

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve("value1");
  });
}).then((value) => {
  console.log(value);
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();
  });
});
*/

/*
//Practicing working with Promise
new Promise((resolve) => {
  console.log("start Promise");
  loadProducts(() => {
    console.log("finsished loading");
    resolve();
  });
}).then(() => {
  console.log("Next step");
});
*/

/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();
  });
});
*/
