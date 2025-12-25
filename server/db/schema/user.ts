import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
export const users = pgTable("users", {
  id: uuid().primaryKey(),
  name: varchar().notNull(),
  createAt: timestamp().notNull().defaultNow(),
  updateAt: timestamp()
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export type CreateUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;
