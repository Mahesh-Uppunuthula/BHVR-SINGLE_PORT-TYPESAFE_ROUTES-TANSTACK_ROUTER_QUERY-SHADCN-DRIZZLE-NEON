import { Hono } from "hono";
const userRoute = new Hono().get("/", (c) =>
  c.json({ message: "get-all-users" })
);
export default userRoute;

