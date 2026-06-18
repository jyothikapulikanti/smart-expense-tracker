require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const expenseRoutes = require("./routes/expenseRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/expenses", expenseRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "SmartSpend API Running",
  });
});

const PORT = 5001;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});