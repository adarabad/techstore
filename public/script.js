let cart = [];

fetch("/products")
.then(res => res.json())
.then(data => {

const container = document.getElementById("products");

data.forEach(product => {

const div = document.createElement("div");
div.className = "product";

div.innerHTML = `
<img src="${product.image}">
<h3>${product.name}</h3>
<p class="price">₹${product.price}</p>
<button onclick='addToCart("${product.name}",${product.price})'>Add to Cart</button>
`;

container.appendChild(div);

});

});

function addToCart(name,price){

cart.push({name,price});

localStorage.setItem("cart",JSON.stringify(cart));

alert("Added to cart");

}