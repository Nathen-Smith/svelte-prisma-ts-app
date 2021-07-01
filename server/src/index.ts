import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import { HTMLParser } from "./HTMLParser";

const prisma = new PrismaClient();
const app = express();

// async function main() {
app.use(
  cors({
    origin: "http://localhost:5000",
    credentials: true,
  })
);
app.use(express.json());

// ... your REST API routes will go here
// await prisma.user.create({
//   data: {
//     name: 'Nathen',
//     email: 'n@email.com',
//     posts: {
//       create: { title: 'Hello World' },
//     },
//     profile: {
//       create: { bio: 'wee' },
//     },
//   },
// })

app.get("/users", async (_req, res) => {
  const users = await prisma.user.findMany();
  res.send(users);
});

app.post("/test", async (req, res) => {
  const url = String(req.body.url);
  console.log(url);
  try {
    let html = await fetch(url).then((response) => response.text());
    // console.log(`good url ${url}`);
    html = HTMLParser(html);
    res.send({ data: html });
  } catch (err) {
    // console.log(`bad url ${url}`);
    res.status(400);
    res.send({ data: "stupid dummy" });
  }
});

// app.get('/inline', async (_req, res) => {
//   const users = await prisma.$queryRaw`SELECT * FROM "User";`;
//   // postgres automatically lowercases, need to use quotes around User
//   res.json(users)
// })

app.listen(3000, () => console.log("express server started"));
// }

// main()
//   .catch((e) => {
//     throw e;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
