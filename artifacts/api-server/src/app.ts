import express, { type Express } from "express";
import type { IncomingMessage, ServerResponse } from "http";
import cors from "cors";
import * as pinoHttpModule from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

// pino-http ships a CJS default export that TypeScript resolves as a namespace.
// Cast to any so the call signature is accepted by all tsconfig variants.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pinoHttpMiddleware = (pinoHttpModule as any).default ?? pinoHttpModule;

app.use(
  pinoHttpMiddleware({
    logger,
    serializers: {
      req(req: IncomingMessage & { id?: string | number }) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res: ServerResponse) {
        return { statusCode: res.statusCode };
      },
    },
  }),
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
