import "dotenv/config";
import express from "express";
import orderRoutes from "./routes/ordersRoutes.js";
import cors from "cors";
import { connectToDatabase } from "./config/mongoDBConnection.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(
  cors({
    origin: [
      "full-ecom-project.vercel.app/",
      "full-ecom-project.vercel.app",
      "https://localhost:5173/",
      "https://localhost:5173",
    ],
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "server currently running" });
});

app.use("/api/v1/order", orderRoutes);

app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`Server running on port:${PORT}`);
});
