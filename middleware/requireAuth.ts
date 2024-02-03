import { PrismaClient } from "@prisma/client";
import jwt, { JwtPayload } from "jsonwebtoken";

const prisma = new PrismaClient();

const requireAuth = async (req: any, res: any, next: any) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { id } = jwt.verify(
      token,
      "thisismysecretpasswordnotsosecretnowisit"
    ) as JwtPayload;
    const user = await prisma.user.findUnique({ where: { id } });
    if(!user) throw new Error('User not found')
    req.user = user
    next()
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

export { requireAuth }