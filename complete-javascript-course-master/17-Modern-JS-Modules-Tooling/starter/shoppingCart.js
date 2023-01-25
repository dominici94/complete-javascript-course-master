// Exporting module
console.log('Exporting module');

// Blocking code
// console.log('Start fetching users');
// // questo codice che blocca il modulo andrà a bloccare anche il modulo che lo sta importando
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching users');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

// if (true) {
//   // NON FUNZIONEREBBE PERCHè IMPORT E EXPORT POSSONO ESSERE USATI SOLO IN TOP LEVEL E NON DENTRO BLOCCHI O FUNZIONI
//   export const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };
// }

const totalPrice = 238;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

// si usa il default quando voglio esportare solo un elemento per module
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
