import { createServer, Model } from "miragejs";

createServer({
  models: {
    details: Model,
  },
  seeds(server) {
    server.create("detail", {
      name: "Mr Fraser Lomas",
      email: "fraser.lomas@esgglobal.com",
      date: "14/05/1985",
      address: "123 Fake Street Preston Lancashire PR2 5YB",
      teliphone: "01772 111145",
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/details", (schema) => {
      return schema.details.all();
    });

   
  },
});
