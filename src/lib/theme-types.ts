export interface Theme {
  id: number;
  name: string;
  colors: Colors;
  encoded: string;
  createdOn: Date;
};

export const FontStyle = {
  NONE: 'none',
  NORMAL: 'normal',
  BOLD: 'bold',
  ITALIC: 'italic',
  ITALIC_BOLD: 'italic-bold',
} as const;

export const isTextStyle = (value: unknown): value is TextStyle =>
  value !== undefined && typeof value === 'object';

export interface TextStyle {
  color: string;
  font_style: typeof FontStyle[keyof typeof FontStyle];
};

export interface Colors {
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
    nickname?: string | TextStyle;
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
