const port = 4000;
const express = require("express");
const app = express();
const mongooes = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//Database Connection with MongoDB
mongooes.connect(
  "mongodb+srv://greatstack:SwatiSingh@cluster0.37dd4zh.mongodb.net/e-commerce"
);
//Image Storage Engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({ storage: storage });

//Creating Upload End point
app.use("/images", express.static("upload/images"));

app.post("/upload", upload.single("product"), (req, resp) => {
  resp.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

//Schema for Creating products
const Product = mongooes.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  avilable: {
    type: Boolean,
    default: true,
  },
});

//Creating api for deleting products
app.post("/removeproduct", async (req, resp) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("removed");
  resp.json({
    success: true,
    name: req.body.name,
  });
});

//Creating api for geting all products

app.post("/addproduct", async (req, resp) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_prduct_array = products.slice(-1);
    let last_prduct = last_prduct_array[0];
    id = last_prduct.id + 1;
  } else {
    id = 1;
  }
  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  console.log(product);
  await product.save();
  console.log("Save");
  resp.json({
    success: true,
    name: req.body,
  });
});

app.get("/allproducts", async (req, resp) => {
  let products = await Product.find({});

  console.log("All Products fetch");
  resp.send(products);
});

//Shema Creating for User Model
const Users = mongooes.model("Users", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//Creating endpoint for Registering the user
app.post("/signup", async (req, resp) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return resp.status(400).json({
      success: false,
      errors: "Existing user found with same user email id add",
    });
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new Users({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });
  await user.save();
  const data = {
    user: {
      id: user.id,
    },
  };
  const token = jwt.sign(data, "secret_ecom");
  resp.json({ success: true, token });
});

//Creating endpoin for user login
app.post("/login", async (req, resp) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passcompare = req.body.password === user.password;
    if (passcompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_ecom");
      resp.json({ success: true, token });
    } else {
      resp.json({ success: false, error: "Wrong Password" });
    }
  } else {
    resp.json({ success: false, error: "Wrong Email Id" });
  }
});
//Creating endpoint for newColection data

app.get("/newcollections", async (req, resp) => {
  let products = await Product.find({});
  let newcollection = products.slice(1).slice(-8);
  console.log("NewCollection Fetch");
  resp.send(newcollection);
});

//Create popular for woment cartegory
app.get("/popularinwomen", async (req, resp) => {
  let product = await Product.find({ category: "women" });
  let popular_in_women = product.slice(0, 4);
  console.log("popular in women fetched");
  resp.send(popular_in_women);
});

//Create MiddleWare to fetch user
const fetchUser = async (req, resp, next) => {
  const token = req.header("auth-token");
  if (!token) {
    resp.status(401).send({ errors: "Please Authenticate" });
  } else {
    try {
      const data = jwt.verify(token, "secret_ecom");
      req.user = data.user;
      next();
    } catch (error) {
      resp
        .status(401)
        .send({ error: "please authenticate using a valid token" });
    }
  }
};

//Create for cart product adding products in cartdata

app.post("/addtocart", fetchUser, async (req, resp) => {
  console.log("Added", req.body.itemId);
  let userData = await Users.findOne({ _id: req.user.id });

  userData.cartData[req.body.itemId] += 1;

  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  resp.send("Added");
});

//Creating Endpoint TO REMOVE product from catdata
app.post("/removefromcart", fetchUser, async (req, resp) => {
  console.log("remove", req.body.itemId);
  let userData = await Users.findOne({ _id: req.user.id });
  if (userData.cartData[req.body.itemId] > 0)
    userData.cartData[req.body.itemId] -= 1;
  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  resp.send("remove");
});

// Creating end point get Cartdata

app.post("/getcart", fetchUser, async (req, resp) => {
  console.log("Get Cart");
  let userData = await Users.findOne({ _id: req.user.id });
  resp.json(userData.cartData);
});

//Server is Runing on port-4000 we can change port number According to you
app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running on port :" + port);
  } else {
    console.log("Error");
  }
});
