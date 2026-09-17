import { eq } from 'drizzle-orm';
import db from './db';
import type { Colors } from './theme';

export const load = async (): Promise<Submission[]> => {
  return (await db.pool
    .select({
      id: db.submissions.id,
      name: db.submissions.name,
      colors: db.submissions.colors,
      encoded: db.submissions.encoded,
      createdOn: db.submissions.createdOn
    })
    .from(db.submissions)) as Submission[];
};

export const approve = async (id: number) => {
  await db.pool.transaction(async (tx) => {
    const { name, colors, encoded } = (
      await tx.delete(db.submissions).where(eq(db.submissions.id, id)).returning({
        name: db.submissions.name,
        colors: db.submissions.colors,
        encoded: db.submissions.encoded
      })
    )[0];
    await tx.insert(db.themes).values({ name, colors, encoded });
  });
};

export const reject = async (id: number) => {
  await db.pool.delete(db.submissions).where(eq(db.submissions.id, id));
};

export interface Submission {
  id: number;
  name: string;
  colors: Colors;
  encoded: string;
  createdOn: Date;
}
