import { addToCart, cart, loadFromStorage } from "../../data/cart.js";

describe("test suite: Add to Cart", () => {
  it("adds a new product to the cart", () => {
    spyOn(localStorage, "setItem"); // this is just to make sure that we are not editing the code, during both cases of 1. usingLoadFromStorage and also 2. we dont set the item after we add to cart.

    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([]);
    }); // here we are mocking the getItem method, we are making the getItem to return a string having empty cart []. but to make it a string, we are just using JSON.stringify, hence dont get confused.

    loadFromStorage(); // to reload the cart to make the getItemMock work
    spyOn(document, "querySelector").and.callFake(() => {
      return "1";
    });

    addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(1);

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart[0].quantity).toEqual(1);
  });

  it("adds an existing product to the cart", () => {
    spyOn(localStorage, "setItem");
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 1,
          deliveryOptionId: "1",
        },
      ]);
    });
    loadFromStorage();

    spyOn(document, "querySelector").and.callFake(() => {
      return "1";
    });

    addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(1);

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart[0].quantity).toEqual(2);
  });
});
