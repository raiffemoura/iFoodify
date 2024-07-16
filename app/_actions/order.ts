"use server";

import { Prisma } from "@prisma/client";
import { db } from "@/app/_lib/prisma";

export const createOrder = async (data: Prisma.OrderCreateInput) => {
  return db.order.create({ data });
};
