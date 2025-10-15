import {
  getAllWebhooks,
  getWebhookById,
  saveWebhook,
} from "@/controllers/WebhookController";
import { Router } from "express";

const router = Router();

// Routes for webhook
router.route("/").get(getAllWebhooks).post(saveWebhook);
router.get("/:id", getWebhookById);

export default router;
