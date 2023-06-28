/*async function populate() {

  const requestURL = "https://fakestoreapi.com/products";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const products = await response.json();

  populateHeader(products);
  showProducts(products);

}


function populateHeader(jsonObj) {
  let main = document.querySelector('main');
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

function showProducts(jsonObj) {
  const products = jsonObj['title'];

  for (var i = 0; i < products.length; i++) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myList = document.createElement('ul');

    myH2.textContent = products[i].name;
    myPara1.textContent = 'Product: ' + products[i].Product;
    myPara2.textContent = 'Price: ' + products[i].Price;
    myPara3.textContent = 'Description:';

    const img = products[i].image;
    for (var j = 0; j < img.length; j++) {
      const listItem = document.createElement('li');
      listItem.setAttribute = img[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    main.appendChild(myArticle);
  }
}

function cargarREST() {
	fetch("https://jruiz1980.github.io/wdd330/json/fakeStore.json")
	.then(function(res) {
		return res.json();
	})
	
	.then(function(images) {
		let html = src="";
		images.forEach(function(images) {
		html += ` 
			<li>
				<a href="${images.image}">Ver Imagen</a>
				${images.price}
			</li>
			`;
		});
	document.getElementById("#products").innerHTML = html;
	}) 
}*/

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>displayProducts(json))
            


fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    const imageUrl = data.image_url;
    return fetch(imageUrl);
  })
  .then(response => response.blob())
  .then(blob => {
    const url = URL.createObjectURL(blob);
    const img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img);
  })
  .catch(error => console.error(error));