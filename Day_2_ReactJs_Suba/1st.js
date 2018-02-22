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
    title: "berry",
    price: 15
  },
  {
    id: 103,
    title: "peach",
    price: 12
  }
];

var getproduct = new Promise((resolve, reject) => {
  let a = Math.random() > 0.5 ? 1 : 0;
  let b = Math.floor(Math.random() * (4 - 1 + 1) + 1);
  if (a == 0) reject("Product not found");
  else resolve(products[b]);
});
getproduct.then(data => console.log(data));
getproduct.catch(error => console.log(error));
