let requestURL = "https://fakestoreapi.com/products";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    const products = request.response;
    populateHeader(products);
    products(products);
}

function populateHeader(jsonObj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['title'];
    main.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = jsonObj['description'] + ' //price: ' + jsonObj['price'];
    main.appendChild(myPara);

    const myImg = document.createElement('img')
    myImg.setAttribute('src', jsonObj['image'])
    main.appendChild(myImg)
}

fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>console.log(json))
let productList = document.insertById("#products")
