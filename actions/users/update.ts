"use server";

import { API_URL } from "@/constants";
import { User } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";

export default async function updateUser(userId: string, formData: FormData) {
  let data: any = {};
  data.userEmail = formData.get("userEmail");
  data.userPassword = formData.get("userPassword");
  data.userRoles[0] = "Employee";

  const response = await fetch(`${API_URL}/auth/${userId}`, {
    method: "PATCH",
    headers: {
      ...AuthHeaders(),
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
