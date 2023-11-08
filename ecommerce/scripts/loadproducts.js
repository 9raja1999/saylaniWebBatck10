var productContainer = document.getElementById('products-container')
window.onload = async () => {
  
  var productRespose = await fetch("data/products.json");
  var productsJson = await productRespose.json();

  generateCard(productsJson)

  // fetch('data/products.json').then().catch()
  //   fetch("data/products.json")
  //     .then((response) => response)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       products = data;
  //     })
  //     .catch((error) => {
  //       console.error("error", error);
  //     });

  // async / await
};

function generateCard(data){
    var {products} = data
    console.log(products, productContainer);

    products.forEach((element) =>{

        var cardNode = document.createElement('div')
        var paraNode = document.createElement('p')
        var btnNode = document.createElement('button')


        cardNode.setAttribute('class', 'card')
        btnNode.setAttribute('id', element.id)
        btnNode.setAttribute('onclick', `addToCart(id)`)



        paraNode.innerText = element.productname
        btnNode.innerText = "ADD TO CART"

        cardNode.appendChild(paraNode)
        cardNode.appendChild(btnNode)
        productContainer.appendChild(cardNode)
    })
}


