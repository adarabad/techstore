const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Fake database (JSON)
let products = [

{
id:1,
name:"Laptop",
price:50000,
image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
description:"High performance laptop suitable for programming, gaming and daily tasks.",
specs:{
processor:"Intel Core i5 12th Gen",
ram:"16GB DDR4",
storage:"512GB SSD",
display:"15.6 inch Full HD",
battery:"10 hours"
}
},

{
id:2,
name:"Smartphone",
price:20000,
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
description:"Powerful smartphone with excellent camera and long battery life.",
specs:{
processor:"Snapdragon 888",
ram:"8GB",
storage:"128GB",
display:"6.5 inch AMOLED",
battery:"5000mAh"
}
},

{
id:3,
name:"Headphones",
price:3000,
image:"https://images.unsplash.com/photo-1518443895914-6bce8bfc9c2f",
description:"Wireless headphones with noise cancellation and deep bass.",
specs:{
type:"Over-Ear",
connectivity:"Bluetooth 5.2",
battery:"30 hours",
weight:"250g"
}
},

{
id:4,
name:"Smart Watch",
price:7000,
image:"https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
description:"Fitness smartwatch with heart rate monitoring and GPS.",
specs:{
display:"1.8 inch AMOLED",
battery:"7 days",
waterproof:"Yes",
sensors:"Heart Rate, SpO2"
}
},

{
id:5,
name:"Gaming Mouse",
price:1500,
image:"https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
description:"Ergonomic gaming mouse designed for high precision and fast response.",
specs:{
dpi:"16000 DPI",
buttons:"7 Programmable Buttons",
lighting:"RGB",
connectivity:"USB Wired"
}
},

{
id:6,
name:"Mechanical Keyboard",
price:4500,
image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
description:"Mechanical keyboard with RGB lighting and tactile switches.",
specs:{
switches:"Blue Mechanical Switches",
lighting:"RGB Backlit",
keys:"104 Keys",
connection:"USB"
}
}

];

// GET all products
app.get("/products", (req, res) => {
  res.json(products);
});

// Add new product
app.post("/products", (req, res) => {
  const product = req.body;
  products.push(product);
  res.json(product);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});