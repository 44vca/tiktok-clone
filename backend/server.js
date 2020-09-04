import express from "express";
import mongoose from "mongoose";

import Data from "./data.js";
import Videos from "./dbModel.js";

//app config
const app = express();
const PORT = process.env.PORT || 9000;

//middlewares
app.use(express.json());
app.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*"),
    response.setHeader("Access-Control-Allow-Headers", "*"),
    next();
});

//DB config
const connection_url =
  "mongodb+srv://sonny:4oqFB6eF7FbwcrmB@cluster0.y40gj.mongodb.net/tiktok?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//API endpoints
app.get("/", (request, response) =>
  response.status(200).send("Zdarova Petushki")
);

app.get("/v1/posts", (request, response) => response.status(200).send(Data));

app.get("/v2/posts", (request, response) => {
  Videos.find({}, (err, data) => {
    if (err) {
      response.status(500).send(err);
    } else {
      response.status(200).send(data);
    }
  });
});

app.post("/v2/posts", (request, response) => {
  const dbVideos = request.body;

  Videos.create(dbVideos, (err, data) => {
    if (err) {
      response.status(500).send(err);
    } else {
      response.status(201).send(data);
    }
  });
});

//listen
app.listen(PORT, () => console.log(`listening on localhost:${PORT}`));
