
/*fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    let prods = document.getElementById('products');
    for (prod of data) {
      prods.className = "products";
      prods.innerHTML += `<section class="${prod.category}">
                            <img src="${prod.image}" width='150px' height='150px' id="prodImg" alt="">
                            <p>${prod.title}</p>
                            <p>$${prod.price.toFixed(2)}</p> 
                          </section>`;
    }
  })

  .catch(error => console.error(error));*/
  

const shopContent = document.getElementById("shopContent");
const shopping = document.getElementById("shopping");
const modalContainer = document.getElementById("modal-container");
const showAlert = document.getElementById("showAlert");
const cantidadCarrito = document.getElementById("cantidadCarrito");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

async function getProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    const modifiedData = data.map(product => {
        return {
          ...product,
           quantity:1
            };
        });

    console.log(carrito);

    modifiedData.forEach((product) => {
        let content = document.createElement("div");
        content.className = "card";
        content.innerHTML = `
            <img src="${product.image}">
            <h3>${product.title}</h3>
            <p class="price">$ ${product.price.toFixed(2)}</p>
            `;
        console.log(product);
        
        shopContent.append(content);

        let buy = document.createElement("button")
        buy.innerText = "BUY";
        buy.className = "buy";

        content.append(buy);

        buy.addEventListener("click", () => {

            const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
            if(repeat) {
                carrito.map((prod) => {
                    if (prod.id === product.id) {
                        prod.quantity++;
                    }
                });
            } else {

            carrito.push({
                id: product.id,
                image: product.image,
                title: product.title,
                price: product.price,
                quantity: product.quantity,
                });
            }
        counterItem();
        });
    });
}
getProducts();
    