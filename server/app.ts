import { Hono } from "hono";
import apiRoute from "./routes";
import { serveStatic } from "hono/bun";
import { logger } from "hono/logger";

// api bindings
export type Bindings = {
  DB_URL: string;
};

// Add Bindings only if there are other routes than /api
const app = new Hono();
app.use(logger());
app.route("/", apiRoute);

app.use("/*", serveStatic({ root: "./build/client" }));
app.get("*", serveStatic({ path: "./build/client/index.html" }));
export default app;
export type AppType = typeof apiRoute;
