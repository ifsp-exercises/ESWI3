import express from "express";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ message: "Hello DlroW" });
});

app.listen(process.env.PORT || 3333, () => console.log("Server is running."));
