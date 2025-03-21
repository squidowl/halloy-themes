import { eq } from 'drizzle-orm';
import { encode as _encode, decode as _decode } from 'theme';
import db from '$lib/db';

export const encode = (colors: Colors): string => {
  return _encode(colors);
};

export const decode = (encoded: string): Colors => {
  return _decode(encoded);
};

export const submit = async (name: string, colors: Colors) => {
  const encoded = encode(colors);
  await db.pool.insert(db.submissions).values({ name, colors, encoded });
};

export const load = async (): Promise<Theme[]> => {
  return (await db.pool
    .select({
      name: db.themes.name,
      colors: db.themes.colors,
      encoded: db.themes.encoded,
      createdOn: db.themes.createdOn,
    })
    .from(db.themes)) as Theme[];
};

export const submissions = async (): Promise<Theme[]> => {
  return (await db.pool
    .select({
      name: db.themes.name,
      colors: db.themes.colors,
      encoded: db.themes.encoded,
      createdOn: db.themes.createdOn,
    })
    .from(db.submissions)) as Theme[];
};

export const nameExists = async (name: string) => {
  return await db.pool.$count(db.themes, eq(db.themes.name, name)) > 0;
};

export interface Theme {
  name: string;
  colors: Colors;
  encoded: string;
  createdOn: Date,
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
