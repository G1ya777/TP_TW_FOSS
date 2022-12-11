const express = require('express');
const path = require('path');
const router = express.Router();
const app = express();
const cors = require('cors')
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const asyncErrors = 'express-async-errors';
require(asyncErrors)
require('dotenv').config()
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

const UserSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true, },
    email: { type: String, required: true, },
    password: { type: String, required: true, }
  });


const FlowerSchema = new mongoose.Schema(
  {
    flowerId: {},
    flower: {},
    price: {},
    img: {}
  });

const User = mongoose.model("User", UserSchema); module.exports = User;

const FlowerArray = mongoose.model('FlowerArray', FlowerSchema, 'flowers'); module.exports = FlowerArray;

mongoose.connect('mongodb://127.0.0.1:27017/usersdb',
  {
    useNewUrlParser: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully to db");
});


router.post('/register', async (req, res) => {

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(req.body.password, salt)
  const check1 = await User.findOne({ 'email': req.body.email });
  const check2 = await User.findOne({ 'userName': req.body.userName });
  var checkAll = false;

  if (check1 == null) {
    checkAll = true;
  }
  else {
    checkAll = false;
    res.send("email exists")
  }

  if (check2 == null) {
    checkAll = true;
  }
  else {
    checkAll = false;
    res.send("userName exists")
  }

  if (checkAll) {

    const user = new User({ userName: req.body.userName, email: req.body.email, password: hash });
    await user.save()
    res.send(user)

  }


});


const authenticateToken = (req, res, next) => {

  const authHeader = req.headers.cookie
  const token = authHeader && authHeader.split('j%3A%7B%22token%22%3A%22')[1].split('%22%2C%22')[0]

  if (token == null) return res.send("guest")

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

const findCart = async (req) => {

  var cartArray
  if (req) cartArray = req.map(Number);
  var cart;
  if (cartArray) {
    cart = await FlowerArray.find({ 'flowerId': { $in: cartArray } });
    return cart;
  }

}

router.get('/cart', authenticateToken, async (req, res) => {

  var cart;
  cart = await findCart(req.query.cart)
  console.log(cart)
  if(cart) res.send(cart)
  else res.send("flower array sent empty")





})

router.post('/sendCart', authenticateToken, async (req, res) => {
  var indexes = [];

    for (let i = 0; i < req.body.length; i++) {
        if (req.body[i]) indexes.push(i + 1)

    }
  var cart;
  cart = await findCart(indexes)
  console.log(cart)

})

router.get('/getNumberOfFlowers', authenticateToken, async (req, res) => {

  const numberOfFlowers = await FlowerArray.find().count()
  res.json({ value: numberOfFlowers })

})
router.get('/flower', authenticateToken, async (req, res) => {
  const page = req.query.page
  const flowerArray = await FlowerArray.find()
    .where('flowerId').gt((page - 1) * 8).lt(page * 8 + 1)
  if (flowerArray.length == 0) res.sendStatus(404)
  else res.json(flowerArray)
})

router.get('/userName', authenticateToken, (req, res) => {

  if (req.user) res.json(req.user.userName)
  else res.sendStatus(403)

})

router.delete('/logout', (req, res) => {
  res.clearCookie("connection");
  res.clearCookie("cart");
  res.end()
})


router.post('/login', async (req, res) => {

  var user
  var isUserName = true
  const login = req.body.login;
  const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

  if (regexExp.test(login)) {
    isUserName = false
  }

  if (isUserName) {
    user = await User.findOne({ 'userName': login })
  }
  else {
    user = await User.findOne({ 'email': login })
  }

  console.log(user)

  if (user != null) {


    const isEqual = await bcrypt.compare(req.body.password, user.password)
    if (!isEqual) res.send("bad password")

    // else res.json({userName : user.userName , email : user.email})

    else {

      token = jwt.sign({ userName: user.userName }, process.env.ACCESS_TOKEN_SECRET)

      res.cookie('connection', { token: token, userName: user.userName }, {
        // secure: true,
        httpOnly: true,
        // // expires: date,
        // domain: 'example.com',
        // sameSite: 'strict',
      }).send();

    }



  }
  else res.send("user does not exist")
});


app.listen(5000, () => {

  console.log('Listening on port ' + 5000)

})

app.use("/", router);
app.use('/assets', express.static('assets'))