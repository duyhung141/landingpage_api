const express = require("express");
const dotenv = require("dotenv");
const app = express();
const authRoutes = require('./routes/authRouter');
const productRoutes = require('./routes/productRouter');
const reviewRoutes = require('./routes/reviewRouter');
const orderRoutes = require('./routes/orderRouter');
const categoryRoutes = require('./routes/categoryRouter');

const cors = require("cors")
const connectDatabase = require("./db/Mongodb")

dotenv.config();
connectDatabase();

app.use(cors())
app.use(express.json())
app.get("/", (req, res) => {
    res.send("nguyen dinh tu")
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/product', productRoutes);
app.use('/api/v1/review', reviewRoutes);
app.use('/api/v1/order', orderRoutes);
app.use('/api/v1/category', categoryRoutes);

app.listen(process.env.PORT, () => {
    console.log("Server started on port", process.env.PORT);
});
