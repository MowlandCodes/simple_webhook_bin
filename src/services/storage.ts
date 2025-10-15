import { Webhook } from "@/models/WebhookModel";
import db from "@/db/db_client";
import { v4 as uuidv4 } from "uuid";

export const fetchAllWebhooks = async (): Promise<Webhook[]> => {
  return await db("webhooks").select("*");
};

export const fetchWebhookById = async (
  id: string,
): Promise<Webhook | undefined> => {
  return await db("webhooks").where({ id }).first();
};

export const storeWebhook = async (data: any): Promise<void> => {
  const newWebhook = {
    id: uuidv4(),
    headers: JSON.stringify(data.headers),
    body: JSON.stringify(data.body),
  };

  await db("webhooks").insert(newWebhook);
};
