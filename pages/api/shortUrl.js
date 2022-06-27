import { PrismaClient } from "@prisma/client";


export default async function handler(req, res) {
  const prisma = new PrismaClient()
  const { url } = req.body;
  const shortUrl = Math.random().toString(36).substring(2, 5);

  try {
    const data = await prisma.link.create({
      data: { url, shortUrl }
    });

    prisma.$disconnect()

    return res.status(200).send(data);
  } catch (error){
    console.log(error)
    return res.status(500).send(error);
  }
  // res.status(200).send(data)

}
