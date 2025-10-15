import {
  fetchAllWebhooks,
  fetchWebhookById,
  storeWebhook,
} from "@/services/storage";
import { Request, Response } from "express";

export const getAllWebhooks = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const data = await fetchAllWebhooks();

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching webhooks:", error);
    res.status(500).json({ error: "Error fetching webhooks" });
  }
};

export const getWebhookById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params;

  try {
    const data = await fetchWebhookById(id);

    if (!data) {
      res.status(404).json({ error: "Webhook not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching webhook by ID:", error);
    res.status(500).json({ error: "Error fetching webhook by ID" });
  }
};

export const saveWebhook = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const data = {
    ...req.body,
    ...req.query,
  };

  if (Object.keys(data).length < 1) {
    res.status(400).json({ error: "No data provided" });
  }

  const dataToSave = {
    headers: req.headers,
    body: data,
  };

  try {
    await storeWebhook(dataToSave);
    res
      .status(201)
      .json({ message: "Webhook saved successfully", data: dataToSave });
  } catch (error) {
    console.error("Error saving webhook:", error);
    res.status(500).json({ error: "Error saving webhook" });
  }
};
