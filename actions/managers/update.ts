"use server";

import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

export default async function createManager(managerId: string, formData: FormData) {
  const manager: any = {};
  for (const key of formData.keys()) {
    const value = formData.get(key);
    manager[key] = formData.get(key);
  }

  const response = fetch(`${API_URL}/managers`, {
    method: "PATCH",
    body: JSON.stringify(manager),
    headers: {
      ...AuthHeaders(),
    },
  });

  if ((await response).status === 201) {
    revalidateTag("dashboard:managers", "");
    revalidateTag(`dashboard:managers:${managerId}`, "");
  }
}
