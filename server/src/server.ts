import dotenv from "dotenv";
const http = require("http");
const app = require("./app");

dotenv.config();

const server = http.createServer(app);
const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`app listening on port ${port}`));
