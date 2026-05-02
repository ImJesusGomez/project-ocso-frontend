"use server";

import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

export default async function createEmployee(formData: FormData) {
  const response = await fetch(`${API_URL}/employees`, {
    method: "POST",
    headers: {
      ...AuthHeaders(),
    },
    body: formData,
  });

  if (response.status === 200) {
    revalidateTag("dashboard:employees", "");
  }
}
