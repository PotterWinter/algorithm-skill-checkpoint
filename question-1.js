function findProductPrice(products, name) {
  // Your code here
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === name) {
      return products[i].price
    }
  }
  return -1

  // let left = 0;
  // let right = products.length - 1;

  // for (let i = 0; i < products.length; i++) {
  //   let mid = Math.floor((left + right) / 2);
  //   console.log(mid)
  //   if (products[mid].name === name) {
  //     return products[mid].price;
  //   } else if (products[mid].name > name) {
  //     left = mid + 1;
  //   } else if (products[mid].name < name) {
  //     right = mid - 1;
  //   }
  // }
  // return -1;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
  { name: "Lime", price: 3 },
  { name: "Orange", price: 4 },
  { name: "Potato", price: 5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1
console.log(findProductPrice(products, "Potato")); // Output: 5
console.log(findProductPrice(products, "Cherry")); // Output: 2.5
