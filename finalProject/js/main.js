
fetch('https://fakestoreapi.com/products/category/electronics')
  .then(response => response.json())
  .then(data => {
    let prods = document.getElementById('products');
    for (prod of data) {
      prods.innerHTML += `<section class="${prod.category}">
                            <img src="${prod.image}" width='150px' height='150px' id="prodImg" alt="">
                            <p>${prod.title}</p>
                            <p>$${prod.price.toFixed(2)}</p> 
                          </section>`;
    }
  })
  .catch(error => console.error(error));