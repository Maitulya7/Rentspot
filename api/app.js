import express from "express";

const app = express();

app.use(express.json());

import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";

const PORT = 8800;

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
