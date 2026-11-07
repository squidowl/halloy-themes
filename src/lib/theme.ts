import {and, eq, ne} from 'drizzle-orm';
import {encode as _encode, decode as _decode} from 'theme';
import db from '$lib/db';
import type {
  Colors,
  Theme,
} from '$lib/theme-types'

export const encode = (colors: Colors): string => {
  return _encode(colors);
};

export const decode = (encoded: string): Colors => {
  return _decode(encoded);
};

export const submit = async (name: string, colors: Colors) => {
  const encoded = encode(colors);
  await db.pool.insert(db.submissions).values({name, colors, encoded});
};

export const load = async (): Promise<Theme[]> => {
  return (await db.pool
    .select({
      id: db.themes.id,
      name: db.themes.name,
      colors: db.themes.colors,
      encoded: db.themes.encoded,
      createdOn: db.themes.createdOn
    })
    .from(db.themes)) as Theme[];
};

export const nameExists = async (name: string, excludeId?: number) => {
  const where = excludeId == null ? eq(db.themes.name, name) : and(eq(db.themes.name, name), ne(db.themes.id, excludeId));
  return (await db.pool.$count(db.themes, where)) > 0;
};

export const remove = async (id: number) => {
  await db.pool.delete(db.themes).where(eq(db.themes.id, id));
};

export const rename = async (id: number, name: string) => {
  await db.pool.update(db.themes).set({name}).where(eq(db.themes.id, id));
};
