"use server";

import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

export default async function deleteEmployee(employeeId: string, formData: FormData) {
  const cleanData = new FormData();
  for (const [key, value] of formData.entries()) {
    if (!key.startsWith("$")) {
      cleanData.append(key, value);
    }
  }
  const response = await fetch(`${API_URL}/employees/${employeeId}`, {
    method: "DELETE",
    headers: {
      ...AuthHeaders(),
    },
    body: cleanData,
  });

  if (response.status === 200) {
    revalidateTag("dashboard:employees", "");
  }
  if (response.status === 200) {
    revalidateTag(`dashboard:employees:${employeeId}`, "");
  }
}
