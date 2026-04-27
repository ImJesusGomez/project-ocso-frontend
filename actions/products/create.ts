"use server";

import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

export default async function createProduct(formData: FormData) {
  const product: any = {};
  for (const key of formData.keys()) {
    const value = formData.get(key);
    product[key] = formData.get(key);
  }

  const response = fetch(`${API_URL}/products`, {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      ...AuthHeaders(),
      "content-type": "application/json",
    },
  });

  if ((await response).status === 201) {
    revalidateTag("dashboard:products", "");
  }
}
