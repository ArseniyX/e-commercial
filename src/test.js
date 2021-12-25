const products = [
  { rate: 3.9, count: 120 },

  { rate: 4.1, count: 259 },

  { rate: 4.7, count: 500 },

  { rate: 2.1, count: 430 },

  { rate: 4.6, count: 400 },

  { rate: 3.9, count: 70 },

  { rate: 3, count: 400 },

  { rate: 1.9, count: 100 },

  { rate: 3.3, count: 203 },

  { rate: 2.9, count: 470 },

  { rate: 4.8, count: 319 },

  { rate: 4.8, count: 400 },

  { rate: 2.9, count: 250 },

  { rate: 2.2, count: 140 },

  { rate: 2.6, count: 235 },

  { rate: 2.9, count: 340 },

  { rate: 3.8, count: 679 },

  { rate: 4.7, count: 130 },

  { rate: 4.5, count: 146 },

  { rate: 3.6, count: 145 },
];
const rateSum = products.map(product => product.rate).reduce((a, b) => a + b, 0);
const countSum = products.map(product => product.count).reduce((a, b) => a + b, 0);
const rateAvg = rateSum / products.length || 0; 
const countAvg = countSum / products.length || 0; 
console.log(rateAvg)
console.log(countAvg);
console.log((rateAvg / products[0].rate) * (countAvg / products[0].count))
console.log((rateAvg / products[1].rate) * (countAvg / products[1].count))
console.log((rateAvg / products[2].rate) * (countAvg / products[2].count))
console.log((rateAvg / products[10].rate) * (countAvg / products[10].count))