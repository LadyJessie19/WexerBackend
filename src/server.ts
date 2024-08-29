import express from "express";
import dotenv from "dotenv";
import db from "./configs/databaseConfig";
import MainRouter from "./routes/MainRouter";
import cors from "cors";
import path from "path";
dotenv.config();

const app = express();
const port = process.env.PORT;

// Middleware para servir arquivos estáticos
app.use("/files/static", express.static("uploads"));

// Rota de arquivos públicos (sem autenticação)
app.use("/files/static", express.static(path.join(__dirname, "..", "uploads")));

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.options("*", cors(corsOptions));
app.use(cors(corsOptions));

// Rota para checar se a API está 👍
app.get("/", (req, res) => {
  res.send("Welcome to Wexer Psi Backend! <br /> Is the server running? Thumbs up! 👍");
});

app.use(express.json());
app.use(MainRouter);

(async () => {
  return await db();
})();

app.listen(port, () => {
  console.log(`Server started! Listening port: ${port}`);
});
