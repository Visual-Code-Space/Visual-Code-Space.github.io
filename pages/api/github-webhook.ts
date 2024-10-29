import dotenv from "dotenv";

dotenv.config();

import { StarEventPayload } from "./github/playload/playloads";
import { sendTelegramMessage } from "./telegram/telegram";
import { Webhooks } from "@octokit/webhooks";

const webhookSecret = process.env.WEBHOOK_SECRET as string;

const webhooks = new Webhooks({
  secret: webhookSecret,
});

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
  
  const signature = req.headers["x-hub-signature-256"];
  const body = req.body;

  if (!(await webhooks.verify(JSON.stringify(body), signature))) {
    res.status(401).end("Unauthorized");
    return;
  }

  const payload: StarEventPayload = body;

  if (payload.action === "created" && playload.starred_at) {
    const telegramMessage = `🌟 [@${payload.sender.login}](${playload.sender.html_url}) starred [${payload.repository.full_name}](${payload.repository.html_url})`;
    await sendTelegramMessage(telegramMessage);
  }
  res.status(200).end();
}
