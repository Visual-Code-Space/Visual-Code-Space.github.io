import { Webhooks } from "@octokit/webhooks";

import dotenv from "dotenv";

dotenv.config();

const webhookSecret = process.env.WEBHOOK_SECRET as string;
const telegramToken = process.env.TELEGRAM_TOKEN as string;
const telegramChatId = process.env.TELEGRAM_CHAT as string;


const webhooks = new Webhooks({
  secret: webhookSecret,
});

async function sendTelegramMessage(message: string): Promise<void> {
  const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: message,
        message_thread_id: 29,
      }),
    });
    
    if (!response.ok) {
      throw new Error(`Telegram API responded with ${response.status}`);
    }

    console.log("Message sent to Telegram.");
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
  }
}

interface StarEventPayload {
  action: string;
  repository: {
    full_name: string;
  };
  sender: {
    login: string;
  };
}


export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
  
  const signature = req.headers.get("x-hub-signature-256");
  const body = req.body;

  if (!(await webhooks.verify(body, signature))) {
    res.status(401).end("Unauthorized");
    return;
  }
  const payload: StarEventPayload = body;

  if (payload.action === "created") {
    console.log(`New star event received for repository ${payload.repository.full_name}`);
    const telegramMessage = `The repository ${payload.repository.full_name} received a new star from ${payload.sender.login}! 🌟`;
    await sendTelegramMessage(telegramMessage);
  }
  res.status(200).end();
}
