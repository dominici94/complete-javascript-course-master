// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);
console.log('Importing module');

// Crea un oggetto contenente tutto quello che viene esportato da un dato modulo: crea un namespace
// in questo modo il modulo shopping cart sta esportando una public API come una classe
// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 9);
// console.log(ShoppingCart.totalPrice);

// andrà a prendere l'elemento di default esportato nel module e possiamo chiamarlo come vogliamo 'add' in questo caso
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('tomato', 3);

console.log(cart);

// console.log('Start fetching');
// // l'ultilizzo del top-level await blocca l'esecuzione dell'intero modulo
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Non troppo pulito
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);

// FUNZIONA IN Node.JS NON NEL BROWSER
// EXPORT
// export.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(
//     `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
//   );
// };

// IMPORT
// const { addToCart } = require('./shoppingCart.js');

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
console.log(stateClone);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateClone);

console.log(stateDeepClone);
