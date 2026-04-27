"use server";

import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function updateProduct(productId: string, formData: FormData) {
  const product: any = {};
  for (const key of formData.keys()) {
    const value = formData.get(key);
    product[key] = formData.get(key);
  }

  product["productSalary"] = +product["productSalary"];

  if (!product["location"]) delete product?.location;

  const response = await fetch(`${API_URL}/products`, {
    method: "PATCH",
    body: JSON.stringify(product),
    headers: {
      ...AuthHeaders(),
      "content-type": "application/json",
    },
  });

  const data = await response.json();

  if (data.status === 201) {
    revalidateTag("dashboard:products", "");
    revalidateTag(`dashboard:products:${productId}`, "");
  }
}
