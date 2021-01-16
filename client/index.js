// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';

console.log('🚀 This is it.');

const BRANDS = [{
  'name': 'Hopaal',
  'url': 'https://hopaal.com/'
}, {
  'name': 'Loom',
  'url': 'https://www.loom.fr'
}, {
  'name': 'ADRESSE',
  'url': 'https://adresse.paris/'
}]

console.table(BRANDS);

// Let's go with a very first simple

// 🎯 TODO: Create a variable and assign it the link of the cheapest t-shirt

// Let's go with a very simple manipulation

// TODO: Create an array called `marketplace` containing all the products (from the 3 shops)

// TODO: For the marketplace, log the number of products
//
// // how many brands



// TODO: For the marketplace, sort products by price

// Array.prototype.filter()
   // 1. Filter the list of products between 50 and 100€

   // Array.prototype.map()
   // 2. Give us an array of the product name only

   // Array.prototype.sort()
   // 3. Sort the product by price, lowest to highest
   // Sort the product by date, recent to old

   // Array.prototype.reduce()
   // 4. Panier moyen de la marketplace

// Create a list of brands
// log the number of products by brands


// TODO: For each shop, log the number of products

// TODO: For each shop, log the number of products by category

// TODO: For each shop, sort products by price


// Go deeper

// TODO: Compute the p90 price value of each shop.
// The p90 value (90th percentile) is a lower value, and it is expected to be exceeded in 90% of the cases



// Again Again
// For a specific shop
const COTELE_PARIS = [];

//Some and Every Checks
// Array.prototype.some()
// TODO: For the marketplace, log new products only.
// A new product is a product released less than 2 weeks.
// TODO: All products less than 100€

// Array.prototype.find()
// Find product with id

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423



// Copy and reference
// The same thing goes for objects, let's say we have a person object
//
//
//


// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });
console.log('just after data');
