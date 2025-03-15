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
  

  export const ferra: Theme = {
    general: {
      background: "#2b292d",
      horizontal_rule: "#323034",
      unread_indicator: "#ffa07a",
      border: "#4f474d"
    },
    text: {
      primary: "#fecdb2",
      secondary: "#AB8A79",
      tertiary: "#d7bde2",
      success: "#b1b695",
      error: "#e06b75"
    },
    buffer: {
        background: "#242226",
        background_text_input: "#1D1B1E",
        background_title_bar: "#222024",
        timestamp: "#685650",
        action: "#b1b695",
        topic: "#AB8A79",
        highlight: "#473f30",
        code: "#af8d9f",
        nickname: "#f6b6c9",
        url: "#d1d1e0",
        selection: "#453d41",
        border_selected: "#7D6E76",
        server_messages: {
            default: "#f5d76e"
        },
        border: ""
    },
    buttons: {
      primary: {
        background: "#2b292d",
        background_hover: "#242226",
        background_selected: "#1d1b1e",
        background_selected_hover: "#0D0C0D"
      },
      secondary: {
        background: "#323034",
        background_hover: "#3e3c41",
        background_selected: "#606155",
        background_selected_hover: "#6F7160"
      }
    }
  };
  