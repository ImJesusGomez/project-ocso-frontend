"use server";

import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteProduct(productId: string) {
  const response = await fetch(`${API_URL}/managers/${productId}`, {
    method: "DELETE",
    headers: {
      ...AuthHeaders(),
    },
  });

  if (response.status === 200) {
    revalidateTag("dashboard:products", "");
    redirect("/dashboard/products");
  }
}
