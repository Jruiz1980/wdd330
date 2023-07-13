

const shopContent = document.getElementById("shopContent");
const shopping = document.getElementById("shopping");
const modalContainer = document.getElementById("modal-container");
const showAlert = document.getElementById("showAlert");
const cantidadCarrito = document.getElementById("cantidadCarrito");

/*let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProducts = async () => {
    const response = await fetch("../../json/fakeStore.json");
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
})*/
let carrito = [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.image}">
    <h3>${product.name}</h3>
    <p class="price">$ ${product.price}</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {
        carrito.push({
            id: product.id,
                image: product.image,
                name: product.name,
                price: product.price,
                cantidad: product.cantidad,
        })
    })
});
 shopping.addEventListener("click", () => {
    window.open("/finalProject/shopping-cart/shoppingCart.html", "_self"); 
    const modalHeader = document.createElement("div");
    modalHeader.className ="modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header">CARRITO</h1>
    `
    modalContainer.append(modalHeader)

    
    carrito.forEach((product) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p class="price">$ ${product.price}</p>
        `;

        modalContainer.append(carritoContent)
    });

    const total = carrito.reduce((acc, el) => acc + el.price, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `total:$ ${total}`;
    modalContainer.append(totalBuying);
    
 }) 
    