export const compareByRecommended = (productA, productB, rateAvg, countAvg) => {
  const { rate: rateA, count: countA } = productA.rating;
  const { rate: rateB, count: countB } = productB.rating;

  const recommendedRateA = (rateAvg / rateA) * (countAvg / countA);
  const recommendedRateB = (rateAvg / rateB) * (countAvg / countB);

  if (recommendedRateA > recommendedRateB) {
    return 1;
  }
  if (recommendedRateA < recommendedRateB) {
    return -1;
  }
  return 0;
};

export const compareByRate = (productA, productB) => {
  const { rate: rateA } = productA.rating;
  const { rate: rateB } = productB.rating;
  if (rateA > rateB) {
    return -1;
  }
  if (rateA < rateB) {
    return 1;
  }
  return 0;
};

export const compareByPrice = (productA, productB, isPricy) => {
  if (productA.price > productB.price) {
    return isPricy ? -1 : 1;
  }
  if (productA.price < productB.price) {
    return isPricy ? 1 : -1;
  }
  return 0;
};
