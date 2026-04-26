"use server";

import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

export default async function createProvider(formData: FormData) {
  const provider: any = {};
  for (const key of formData.keys()) {
    const value = formData.get(key);
    provider[key] = formData.get(key);
  }

  const response = fetch(`${API_URL}/providers`, {
    method: "POST",
    body: JSON.stringify(provider),
    headers: {
      ...AuthHeaders(),
      "content-type": "application/json",
    },
  });

  if ((await response).status === 201) {
    revalidateTag("dashboard:providers", "");
  }
}
