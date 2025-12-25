import { Hono } from "hono";
import userRoute from "../users";

const v1Route = new Hono().route("/users", userRoute);
export default v1Route;