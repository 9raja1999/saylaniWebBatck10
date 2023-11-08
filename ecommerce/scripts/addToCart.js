var products = () => {
    return "hghjghjghhjg"
}
// async function fetchProducts() {
//   var productRespose = await fetch("data/products.json");
//   var productsJson = await productRespose.json();
//   return productsJson;
// }

async function addToCart(id) {
  var products = await fetchProducts();
  console.log("kkjhkjhkjhkj", id, products);
}
