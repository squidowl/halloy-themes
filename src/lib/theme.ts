import { encode as _encode, decode as _decode } from 'theme';
import { db, themes } from '$lib/db';

export const encode = (colors: Colors): string => {
  return _encode(colors);
};

export const decode = (encoded: string): Colors => {
  return _decode(encoded);
};

export const submit = async (name: string, colors: Colors) => {
  const encoded = encode(colors);
  await db.insert(themes).values({ name, colors, encoded });
};

export const load = async (): Promise<Theme[]> => {
  return (await db
    .select({
      name: themes.name,
      colors: themes.colors,
      encoded: themes.encoded
    })
    .from(themes)) as Theme[];
};

export interface Theme {
  name: string;
  colors: Colors;
  encoded: string;
}

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
