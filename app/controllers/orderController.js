const { writeToGoogleSheets } = require("../functions/writeGoogleSheets");
const Order = require("../models/orderModel");

// Controller để tạo một đơn hàng mới
exports.createOrder = async (req, res) => {
  try {
    const { customer, products, totalPrice, status } = req.body;
    const newData = [
      [customer, products,totalPrice, status],
      // ["Emily", 35, "Australia"],
    ];
    const newOrder = new Order({ customer, products, totalPrice, status });
    if(newOrder){
      await writeToGoogleSheets(newData);
    }https://open.spotify.com/episode/7y1yRWHkG9xSL76i1JaCge
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller để lấy tất cả đơn hàng
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error getting all orders:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller để lấy một đơn hàng theo ID
exports.getOrderById = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    console.error("Error getting order by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller để cập nhật trạng thái của một đơn hàng theo ID
exports.updateOrderStatusById = async (req, res) => {
  try {
    const orderId = req.params.id;
    const { status } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );
    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error("Error updating order status by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller để xóa một đơn hàng theo ID
exports.deleteOrderById = async (req, res) => {
  try {
    const orderId = req.params.id;
    const deletedOrder = await Order.findByIdAndDelete(orderId);
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting order by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
