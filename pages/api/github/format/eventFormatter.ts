import { WebHookEvent } from "../payload/events"
import { StarEventPayload } from "../payload/payloads";

export function formatEvent(event: WebHookEvent): string | undefined {
  const payload = event.payload;

  switch (event.eventType) {
    case "star": {
      const starPayload = payload as StarEventPayload;
      if (starPayload.action !== "created") {
        return undefined;
      }

      const userLogin = starPayload.sender.login;
      const userUrl = starPayload.sender.html_url;

      const repositoryFullname = starPayload.repository.full_name;
      const repositoryUrl = starPayload.repository.html_url;

      return `🌟 [@${userLogin}](${userUrl}) starred [${repositoryFullname}](${repositoryUrl})`; 
    }
    default:
      return undefined;
  }
}
