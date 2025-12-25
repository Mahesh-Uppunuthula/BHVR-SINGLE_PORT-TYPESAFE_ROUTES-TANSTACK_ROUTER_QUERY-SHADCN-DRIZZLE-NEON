import { Hono } from "hono";
import v1Route from "./v1";
import { Bindings } from "../app";

// since /api is the exposed endpoint add bindings here
const apiRoute = new Hono<{ Bindings: Bindings }>()
  .basePath("/api")
  .route("/v1", v1Route);
export default apiRoute;
