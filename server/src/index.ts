import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";
// import "body-parser"

(async () => {
  const prisma = new PrismaClient();
  const app = express();
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
    return res.send(users);
  });

  app.post("/test", async (req, res) => {
    const data = req.body;
    return res.send({ hmm: data });
  });

  // app.get('/inline', async (_req, res) => {
  //   const users = await prisma.$queryRaw`SELECT * FROM "User";`;
  //   // postgres automatically lowercases, need to use quotes around User
  //   res.json(users)
  // })

  app.listen(3000, () => console.log("express server started"));
})();
