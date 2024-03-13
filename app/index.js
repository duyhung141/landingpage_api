const express = require("express");
const dotenv = require("dotenv");
const app = express();
const authRoutes = require('./routes/authRouter');
const productRoutes = require('./routes/productRouter');
const reviewRoutes = require('./routes/reviewRouter');
const orderRoutes = require('./routes/orderRouter');

const connectDatabase = require("./db/Mongodb")

dotenv.config();
connectDatabase();

app.use(express.json())
app.get("/", (req, res) => {
    res.send("nguyen dinh tu")
});

app.use('/auth', authRoutes);
app.use('/product', productRoutes);
app.use('/review', reviewRoutes);
app.use('/order', orderRoutes);

app.listen(process.env.PORT, () => {
    console.log("Server started on port", process.env.PORT);
});
