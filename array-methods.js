const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

// apply map and for each
// console.log(products);
const brands = products.map(product => product.brand)
console.log(brands);

products.forEach(product => {
    console.log(product.price)
});
//filter
const filtered = products.filter(product => product.price <= 3200)
console.log(filtered)
//find
const finding = products.find(product => product.name.includes("n"));
console.log(finding)