import express from "express";
import routes from "./routes";

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.carregarRoutes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  carregarRoutes() {
    this.server.use(routes);
  }
}

export default new App().server;
