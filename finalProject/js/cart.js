    const shopCart = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "grid";
    const modalHeader = document.createElement("div");
    modalHeader.className ="modal-header";
    modalHeader.innerHTML = `
    <h2 class="modal-header">SHOPPING CART</h2>
    `;
    modalContainer.append(modalHeader)

    const modalbutton = document.createElement("h2");
    modalbutton.innerText = "X";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalbutton);
    
    carrito.forEach((product) => {
        const maxLength = 10;
        let title = product.title;
        if (title.length > maxLength) {
            title = title.substring(0, maxLength) + "...";
        }
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
            <img src="${product.image}">
            <h3>${title}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <p> Items: ${product.quantity}</p>
            <p> Total: $${(product.quantity * product.price).toFixed(2)}</p> 
        `;

        modalContainer.append(carritoContent)

        let remove = document.createElement("span");
        remove.innerText = "\uD83D\uDDD1\uFE0F";
        remove.className = "remove-product";
        carritoContent.append(remove);

        remove.addEventListener("click", removeProduct)
    });

    const total = carrito.reduce((acc, el) => acc + el.price * el.quantity, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `TOTAL: $${total.toFixed(2)}`;
    modalContainer.append(totalBuying);
}
shopping.addEventListener("click", shopCart);

const removeProduct = () => {
    const findId = carrito.find((element) => element.id);
    carrito = carrito.filter((carritoId) => {
        return carritoId !== findId;
    });
    counterItem();
    shopCart();
};
const counterItem = () => {
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText = carrito.length;
}