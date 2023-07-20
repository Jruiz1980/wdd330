const shopContent = document.getElementById("shopContent");
const shopping = document.getElementById("shopping");
const modalContainer = document.getElementById("modal-container");
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
            <p class="price" width=150 >$ ${product.price.toFixed(2)}</p>
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
    