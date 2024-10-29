export interface EventPayload {
  action: string;
  sender: {
    login: string;
    html_url: string;
  };
}

export interface StarEventPayload extends EventPayload {
  starred_at?: string;
  repository: {
    full_name: string;
    html_url: string;
  };
}

export interface ForkEventPayload extends EventPayload {
  forkee: {
    full_name: string;
    html_url: string;
  }
}
