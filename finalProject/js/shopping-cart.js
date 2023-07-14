

const shopContent = document.getElementById("shopContent");
const shopping = document.getElementById("shopping");
const modalContainer = document.getElementById("modal-container");
const showAlert = document.getElementById("showAlert");
const cantidadCarrito = document.getElementById("cantidadCarrito");

/*let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);
};

getProducts();

data.forEach((prod)=> {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML =`
    <section class="${prod.category}">
        <img src="${prod.image}" width='150px' height='150px' id="prodImg" alt="">
        <p>${prod.title}</p>
        <p>$${prod.price.toFixed(2)}</p> 
    </section>`;

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {
        const repeat = carrito.some((repeatProduct) => repeatProduct.Id === product.id);

        if(repeat) {
            carrito.map((prod) => {
                if (prod.id === product.id) {
                    prod.cantidad++;
                }
            });
        } 
        else{
            carrito.push({
                id: product.id,
                image: product.image,
                name: product.name,
                price: product.price,
                cantidad: product.cantidad,
            });
            console.log(carrito);
            console.log(carrito.length);
            carritoCounter();
            savelocal();
        }
    });
});

shopping.addEventListener("click", () => {
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito.</h1>
    `;
    modalContainer.append(modal-header);

     const modalButton = document.createElement("h1")
     modalButton.innerText = "x";
     modalButton.className = "modal-header-button";

     modalHeader.append(modalButton);

     let shoppingContent = document.createElement("div");
     carrito.className = "modal-content";
     carrito.innerHTML = `
     
     `
})
let carrito = [];
async function loadJSONS(){
    carrito.push(await fetch('https://fakestoreapi.com/products').then(res => res.json()));
}
loadJSONS();
console.log(carrito);

*/

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

async function getProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    data.forEach((product) => {
        let content = document.createElement("div");
        content.className = "card";
        content.innerHTML = `
            <img src="${product.image}">
            <h3>${product.title}</h3>
            <p class="price">$ ${product.price.toFixed(2)}</p>
            `;
        console.log(data);
        

        shopContent.append(content);

        let comprar = document.createElement("button")
        comprar.innerText = "comprar";
        comprar.className = "comprar";

        content.append(comprar);

        comprar.addEventListener("click", () => {
            carrito.push({
                id: product.id,
                    image: product.image,
                    title: product.title,
                    price: product.price,
                    cantidad: product.cantidad,
            });
        });
    });
};

getProducts();
    