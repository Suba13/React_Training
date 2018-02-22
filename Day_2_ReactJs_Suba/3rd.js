let products = [
  {
    id: 100,
    title: "apple",
    price: 10
  },
  {
    id: 101,
    title: "banana",
    price: 5
  },
  {
    id: 102,
    title: "blueberry",
    price: 15
  },
  {
    id: 103,
    title: "peach",
    price: 12
  }
];

var increment_price = products.map(products => {
  let price = products.price * (50 / 100) + products.price;
  return { id: products.id, title: products.title, price: price };
});
console.log(increment_price);

var stringval = products.map(products => {
  if (products.title.includes("berr"))
    return { id: products.id, title: products.title, price: products.price };
});
console.log(stringval);

var multiply_3_5 = products.map(products => {
  if (products.price % 3 == 0 && products.price % 5 == 0)
    return { id: products.id, title: products.title, price: products.price };
});
console.log(multiply_3_5);
