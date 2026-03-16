let cart = [];

fetch("/products")
.then(res => res.json())
.then(data => {

const container = document.getElementById("products");

data.forEach(product => {

const div = document.createElement("div");
div.className = "product";

div.innerHTML = `
<a href="product.html?id=${product.id}">
<img src="${product.image}">
<h3>${product.name}</h3>
</a>

<p class="price">₹${product.price}</p>
<p class="desc">${product.description}</p>

<ul class="specs">
${product.specs?.processor ? `<li><b>Processor:</b> ${product.specs.processor}</li>` : ""}
${product.specs?.ram ? `<li><b>RAM:</b> ${product.specs.ram}</li>` : ""}
${product.specs?.storage ? `<li><b>Storage:</b> ${product.specs.storage}</li>` : ""}
${product.specs?.connectivity ? `<li><b>Connectivity:</b> ${product.specs.connectivity}</li>` : ""}
${product.specs?.battery ? `<li><b>Battery:</b> ${product.specs.battery}</li>` : ""}
${product.specs?.dpi ? `<li><b>DPI:</b> ${product.specs.dpi}</li>` : ""}
${product.specs?.switches ? `<li><b>Switches:</b> ${product.specs.switches}</li>` : ""}
${product.specs?.speed ? `<li><b>speed:</b> ${product.specs.speed}</li>` : ""}
${product.specs?.sensors ? `<li><b>Sensors:</b> ${product.specs.sensors}</li>` : ""}
</ul>

<button onclick='addToCart("${product.name}",${product.price})'>
Add to Cart
</button>
`;

container.appendChild(div);

});

});

function addToCart(name,price){

cart.push({name,price});

localStorage.setItem("cart",JSON.stringify(cart));

alert("Added to cart");

}