const products = ['rice', 'sugar', 'wheat', 'cheese'];
const productPrices = [16.89, 56.92, 20.89, 345.99];
const productSold = ['rice', 'cheese'];
const soldPrice = [18.99, 400.89];

function priceCheck(products, productPrices, productSold, soldPrice) {
  const productMap = new Map();
  for (let i = 0; i < products.length; i++) {
    productMap.set(products[i], productPrices[i]);
    console.log(productMap);
  }

  let errors = 0;
  for (let i = 0; i < productSold.length; i++) {
    const correctPrice = productMap.get(productSold[i]);
    if (correctPrice !== soldPrice[i]) {
      errors++;
    }
  }

  return errors;
}

const errors = priceCheck(products, productPrices, productSold, soldPrice);
console.log(errors);
