import fastify from "fastify";
import { hello } from "./routes/hello";

export const app = fastify().withTypeProvider()

app.register(hello)