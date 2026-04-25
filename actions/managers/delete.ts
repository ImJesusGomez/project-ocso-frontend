"use server";

import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

export default async function deleteManager(managerId: string) {
  const response = fetch(`${API_URL}/managers/${managerId}`, {
    method: "DELETE",
    headers: {
      ...AuthHeaders(),
    },
  });

  revalidateTag("dashboard:managers", "");
}
