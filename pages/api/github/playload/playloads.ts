
export interface StarEventPayload {
  action: string;
  starred_at?: string;
  repository: {
    full_name: string;
    html_url: string;
  };
  sender: {
    login: string;
    html_url: string;
  };
}
