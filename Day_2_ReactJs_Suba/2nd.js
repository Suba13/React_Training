let productsInCart = [
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
    title: "berry",
    price: 15
  },
  {
    id: 103,
    title: "peach",
    price: 12
  }
];
let value = 0;
for (x of productsInCart) {
  value += x.price;
}
let mockProductsApi = new Promise((resolve, reject) => {
  setTimeout(() => resolve(value), 2000);
});

mockProductsApi.then(data => console.log(data));
