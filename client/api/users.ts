import type { AppType } from "@server/app";
import { hc } from "hono/client";

const client = hc<AppType>("/");

export const usersApi = {
  getAllUsers: async () => {
    const getAllUsers = await client.api.v1.users.$get();
    if (!getAllUsers.ok) throw new Error("Failed to fetch users");
    return await getAllUsers.json();
  },
};
