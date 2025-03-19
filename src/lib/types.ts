export interface Item {
  name: string;
  theme: Theme;
  encoded: string;
  submittedBy: string;
}


export interface Theme {
  general?: {
    background?: string;
    border?: string;
    horizontal_rule?: string;
    unread_indicator?: string;
  };
  text?: {
    primary?: string;
    secondary?: string;
    tertiary?: string;
    success?: string;
    error?: string;
  };
  buffer?: {
    action?: string;
    background?: string;
    background_text_input?: string;
    background_title_bar?: string;
    border?: string;
    border_selected?: string;
    code?: string;
    highlight?: string;
    nickname?: string;
    selection?: string;
    server_messages?: {
      default?: string;
    };
    timestamp?: string;
    topic?: string;
    url?: string;
  };
  buttons?: {
    primary?: {
      background?: string;
      background_hover?: string;
      background_selected?: string;
      background_selected_hover?: string;
    };
    secondary?: {
      background?: string;
      background_hover?: string;
      background_selected?: string;
      background_selected_hover?: string;
    };
  };
}
