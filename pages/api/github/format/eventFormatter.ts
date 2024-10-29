import { WebHookEvent } from "../payload/events"
import { StarEventPayload, ForkEventPayload } from "../payload/payloads";

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
    case "fork": {
      const forkPayload = payload as ForkEventPayload;

      const userLogin = forkPayload.sender.login;
      const userUrl = forkPayload.sender.html_url;

      const forkFullname = forkPayload.forkee.full_name;
      const forkUrl = forkPayload.forkee.html_url;

      return `🍴 [@${userLogin}](${userUrl}) forked [${forkFullname}](${forkUrl})`;
    }
    default:
      return undefined;
  }
}
