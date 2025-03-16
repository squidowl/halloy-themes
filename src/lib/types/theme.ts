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

export const midnight: Theme = {
  general: {
    background: "#0d1b2a",
    horizontal_rule: "#1b263b",
    unread_indicator: "#00aaff",
    border: "#415a77"
  },
  text: {
    primary: "#e0e1dd",
    secondary: "#778da9",
    tertiary: "#a8dadc",
    success: "#4ea8de",
    error: "#e63946"
  },
  buffer: {
    background: "#1b263b",
    background_text_input: "#0a192f",
    background_title_bar: "#112240",
    timestamp: "#8d99ae",
    action: "#4ea8de",
    topic: "#778da9",
    highlight: "#3d5a80",
    code: "#c8d6e5",
    nickname: "#00b4d8",
    url: "#48cae4",
    selection: "#2a4d69",
    border_selected: "#61a5c2",
    server_messages: {
      default: "#ffd166"
    },
    border: "#415a77"
  },
  buttons: {
    primary: {
      background: "#1b263b",
      background_hover: "#152238",
      background_selected: "#112240",
      background_selected_hover: "#0a192f"
    },
    secondary: {
      background: "#415a77",
      background_hover: "#527a99",
      background_selected: "#6c91bf",
      background_selected_hover: "#8eaed3"
    }
  }
};

export const forest: Theme = {
  general: {
    background: "#1f271b",
    horizontal_rule: "#2c3e25",
    unread_indicator: "#a3be8c",
    border: "#4b6043"
  },
  text: {
    primary: "#d8d4c8",
    secondary: "#a49d87",
    tertiary: "#c7c7a6",
    success: "#a3be8c",
    error: "#bf616a"
  },
  buffer: {
    background: "#2c3e25",
    background_text_input: "#202b1e",
    background_title_bar: "#1d251b",
    timestamp: "#8a9a74",
    action: "#a3be8c",
    topic: "#a49d87",
    highlight: "#6b705c",
    code: "#bfc4a4",
    nickname: "#d8d4c8",
    url: "#9a8c98",
    selection: "#3d4a3a",
    border_selected: "#8f9779",
    server_messages: {
      default: "#eac67a"
    },
    border: "#4b6043"
  },
  buttons: {
    primary: {
      background: "#1f271b",
      background_hover: "#252e22",
      background_selected: "#2c3e25",
      background_selected_hover: "#374931"
    },
    secondary: {
      background: "#4b6043",
      background_hover: "#5e7552",
      background_selected: "#718966",
      background_selected_hover: "#8f9779"
    }
  }
};

export const sunset: Theme = {
  general: {
    background: "#1a1a2e",
    horizontal_rule: "#22223b",
    unread_indicator: "#ff6b6b",
    border: "#ff9f1c"
  },
  text: {
    primary: "#f5f5f5",
    secondary: "#ffa69e",
    tertiary: "#ff9f1c",
    success: "#4ecdc4",
    error: "#ff6b6b"
  },
  buffer: {
    background: "#22223b",
    background_text_input: "#1a1a2e",
    background_title_bar: "#3a3a5c",
    timestamp: "#f8e9a1",
    action: "#ff9f1c",
    topic: "#ffa69e",
    highlight: "#c70039",
    code: "#ff6b6b",
    nickname: "#ff9f1c",
    url: "#4ecdc4",
    selection: "#5a189a",
    border_selected: "#f72585",
    server_messages: {
      default: "#f8e9a1"
    },
    border: "#ff9f1c"
  },
  buttons: {
    primary: {
      background: "#1a1a2e",
      background_hover: "#22223b",
      background_selected: "#3a3a5c",
      background_selected_hover: "#5a189a"
    },
    secondary: {
      background: "#ff9f1c",
      background_hover: "#ff6b6b",
      background_selected: "#ff4d6d",
      background_selected_hover: "#d81159"
    }
  }
};
