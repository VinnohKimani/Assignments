const price = 200;

const discountPercentage = 0;

const taxPercentage = 0;

// const finalPrice = calculatePrice(price, discountPercentage, taxPercentage);

function calculatePrice(price, discountPercentage, taxPercentage) {
  const discount = (price * discountPercentage) / 100;

  const priceAfterDiscount = price - discount;

  const tax = (priceAfterDiscount * taxPercentage) / 100;

  const finalPrice = priceAfterDiscount + tax;

  return finalPrice;
}

finalPrice = calculatePrice(price, discountPercentage, taxPercentage);

console.log(finalPrice);
