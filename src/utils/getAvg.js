const getAvg = (products) => {
  const rateSum = products
    .map((product) => product.rating.rate)
    .reduce((a, b) => a + b, 0);
  const countSum = products
    .map((product) => product.rating.count)
    .reduce((a, b) => a + b, 0);
  const rateAvg = rateSum / products.length || 0;
  const countAvg = countSum / products.length || 0;
  return [rateAvg, countAvg];
};

export default getAvg