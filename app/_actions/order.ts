"use server";

import { Prisma } from "@prisma/client";
import { db } from "@/app/_lib/prisma";
import { revalidatePath } from "next/cache";

export const createOrder = async (data: Prisma.OrderCreateInput) => {
  return db.order.create({ data });
  revalidatePath("/my-orders");
};
