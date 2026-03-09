const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Fake database (JSON)
let products = [
{ id:1, name:"Laptop", price:50000, image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
{ id:2, name:"Smartphone", price:20000, image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
{ id:3, name:"Headphones", price:3000, image:"https://www.theaudiostore.in/cdn/shop/files/sennheiser-accentum-hybrid-noise-canceling-wireless-headphones-black-41622095659263.jpg?v=1744394599" },
{ id:4, name:"Smart Watch", price:7000, image:"https://inspireonline.in/cdn/shop/files/Apple_Watch_SE_GPS_40mm_Midnight_Aluminium_Midnight_Sport_Band_PDP_Image_2023_Position-1__en-IN_7385f466-e349-4d65-b7dc-320e81f2d3e3.jpg?v=1698875782" },
{ id:5, name:"Gaming Mouse", price:1500, image:"https://m.media-amazon.com/images/I/61AcT0ZuO3L.jpg" },
{ id:6, name:"Mechanical Keyboard", price:4500, image:"https://m.media-amazon.com/images/I/61P7MvyRbUL._AC_UF1000,1000_QL80_.jpg" },
{ id:7, name:"Bluetooth Speaker", price:2500, image:"https://www.boat-lifestyle.com/cdn/shop/files/Stone_SpinXPro_1_b3503890-50f6-4cd1-9138-0bd90874391e_1300x.png?v=1709717442" },
{ id:8, name:"Tablet", price:18000, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwbxO--cbWBZFNzn29JXImtEIa9mz7G7aCgA&s" },
{ id:9, name:"Monitor", price:12000, image:"https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc" },
{ id:10, name:"Gaming Chair", price:9000, image:"https://www.greensoul.online/cdn/shop/files/r1_650x.jpg?v=1756712404" },
{ id:11, name:"External Hard Drive", price:6000, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2bBAFQ2GGbqNkrTL2DQDIsbMD3qRJn5tBSg&s" },
{ id:12, name:"Webcam", price:3500, image:"https://m.media-amazon.com/images/I/61-K2lXmHQL.jpg" },
{ id:13, name:"USB Flash Drive", price:800, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvNOeNbymNYajBLGKS2ND0OyySkn-FAEKkOA&s" },
{ id:14, name:"VR Headset", price:15000, image:"https://images.unsplash.com/photo-1593508512255-86ab42a8e620" }
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