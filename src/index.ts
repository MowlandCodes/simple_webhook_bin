import express, { Express, Request, Response } from "express";
import webhookRoutes from "@/routes/WebhookRoutes";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const PORT: number = Number(process.env.PORT!) || 3000;

app.use(express.json());

// Main routes for the webhook
app.use("/webhook", webhookRoutes);
app.get("/", (req: Request, res: Response): void => {
  res.status(200).json({ message: "🪝 Welcome to the Webhook Bin! 🪝" });
});

app.listen(PORT, () => {
  console.log(`🌐 Server is running on port: \x1b[32;1m${PORT}\x1b[0m`);
});
