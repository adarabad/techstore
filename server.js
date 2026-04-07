const express = require("express");
const cors = require("cors");
const { type } = require("express/lib/response");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"))

// Data Storage
let users = [];
let orders = [];


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
image:"https://hammeronline.in/cdn/shop/files/Bash_2.0_Bluetooth_Headphones.webp?v=1726899059",
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
image:"https://www.leafstudios.in/cdn/shop/files/1_1099cd20-7237-4bdf-a180-b7126de5ef3d_1000x.png?v=1722230645",
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
image:"https://m.media-amazon.com/images/I/61AcT0ZuO3L.jpg",
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
image:"https://m.media-amazon.com/images/I/61P7MvyRbUL.jpg",
description:"Mechanical keyboard with RGB lighting and tactile switches.",
specs:{
switches:"Blue Mechanical Switches",
lighting:"RGB Backlit",
keys:"104 Keys",
connection:"USB"
},
},

{
id:7,
name:"Wireless Earbuds",
price:4500,
image:"https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
description:"Compact wireless earbuds with deep bass and active noise cancellation.",
specs:{
connectivity:"Bluetooth 5.3",
battery:"24 hours with charging case"
}
},

{
id:8,
name:"4K Monitor",
price:22000,
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG0tlspcd1sq4N_7BeNWKek9jacpYr72PeaQ&s",
description:"Ultra HD 4K monitor ideal for gaming, programming and graphic design.",
specs:{
display:"27 inch 4K UHD",
refreshRate:"144Hz",
connectivity:"HDMI / DisplayPort"
}
},

{
id:9,
name:"Portable SSD",
price:8500,
image:"https://i.pcmag.com/imagery/reviews/00jR5OEn9d3h9M6qWvqGNd9-1..v1569469917.jpg",
description:"High speed portable SSD for storing large files and fast data transfer.",
specs:{
storage:"1TB",
connectivity:"USB-C",
speed:"1050MB/s"
}
},

{
id:10,
name:"Gaming Headset",
price:3500,
image:"https://images.unsplash.com/photo-1599669454699-248893623440",
description:"Comfortable gaming headset with surround sound and noise-canceling microphone for immersive gaming sessions.",
specs:{
connectivity:"3.5mm Jack / USB",
audio:"7.1 Surround Sound",
microphone:"Noise Cancelling"
}
},

{
id:11,
name:"Wireless Charger",
price:1200,
image:"https://ambraneindia.com/cdn/shop/files/wireless-phone-charger.webp?v=1763451235&width=700",
description:"Fast wireless charging pad compatible with smartphones and wireless charging enabled devices.",
specs:{
power:"15W Fast Charging",
compatibility:"Qi Enabled Devices",
connectivity:"USB-C"
}
},

{
id:12,
name:"USB-C Hub",
price:2200,
image:"https://mm.digikey.com/Volume0/opasdata/d220001/medias/images/5881/MFG_5G3AGBB-USB-C-HUB.jpg",
description:"Multi-port USB-C hub that expands your laptop connectivity with HDMI, USB ports and SD card reader.",
specs:{
ports:"HDMI, 3x USB, SD Card",
compatibility:"USB-C Laptops",
material:"Aluminium"
}
},

{
id:13,
name:"Ipad",
price:30000,
image:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-storage-select-202405-13inch-starlight-wifi_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=80&.v=TENLTVRoeFdHUUI5ZE1ZZmxpQUlNMm5pQUoxb0NIVEJFSjRVRzZ4dzV5VG9xblRoSytlREYxb2tmSnZTRlIvWmxzVWxuaTA3UGxIdzhKNUtuSEF5VlVtYW1kMXNQLzdDd2NuUVFzTDNlZmEyTE1mSHgwMHh1SlVoUDJNTksyTUZnWG04VnYwV0NCYVhKcVlFN0RlblJR&traceId=1",
description:"Apple iPad Air 13″ (M2): Liquid Retina Display, 512GB, Landscape 12MP Front Camera / 12MP Back Camera, Wi-Fi 6E, Touch ID, All-Day Battery Life — Space Grey ",
specs:{
ram: "12 GB",
storage: "512 Gb",
connectivity: "Wifi 6e"

}
},

{
id:14,
name:"Router",
price:4800,
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZld5_-WJx8gZ1SNjZw8pNjZUzN6FZrBUETA&s",
description:"High speed dual band WiFi router suitable for gaming, streaming and smart home devices.",
specs:{
speed:"3000 Mbps",
bands:"Dual Band 2.4GHz / 5GHz",
ports:"4 Gigabit LAN Ports"
}
},

{
id:15,
name: "Printer",
price:8500,
image: "https://m.media-amazon.com/images/I/51Q+WJ6+JrL._SX679_.jpg",
description: "Canon PIXMA MegaTank G1730",
specs: {
connectivity:"USB 2.0",
type: "inkjet printer",
speed: "Maximum Print Speed: 11/6 (mono/color) images per minute; Print cost Monochrome: Rs 0.13 ; Print cost color: Rs 0.25 ; Maximum Print Resolution: 4800 x 1200 dpi"
}

}
];

// GET all products
app.get("/products", (req, res) => {
  res.json(products);
});

/* -------------------- SIGNUP -------------------- */

app.post("/signup",(req,res)=>{

const {name,email,password} = req.body;

const existingUser = users.find(u => u.email === email);

if(existingUser){
return res.status(400).json({message:"User already exists"});
}

users.push({name,email,password});

res.json({message:"Signup successful"});

})

/* -------------------- SIGNUP -------------------- */

app.post("/signup",(req,res)=>{

const {name,email,password} = req.body;

const existingUser = users.find(u => u.email === email);

if(existingUser){
return res.status(400).json({message:"User already exists"});
}

users.push({name,email,password});

res.json({message:"Signup successful"});

})

/* -------------------- LOGIN -------------------- */

app.post("/login",(req,res)=>{

const {email,password} = req.body;

const user = users.find(u => u.email === email && u.password === password);

if(user){
res.json({message:"Login successful"});
}else{
res.status(401).json({message:"Invalid email or password"});
}

});


/* -------------------- ADMIN ADD PRODUCT -------------------- */

app.post("/add-product",(req,res)=>{

const product = req.body;

products.push(product);

res.json({
message:"Product added successfully",
product
});

});

/* -------------------- GET ALL ORDERS -------------------- */

app.get("/orders",(req,res)=>{
res.json(orders);
});

app.post('/order', (req, res) => {
  res.json(orders)
});

/* -------------------- START SERVER -------------------- */

app.listen(3000,()=>{
console.log("Server running on port 3000");
});