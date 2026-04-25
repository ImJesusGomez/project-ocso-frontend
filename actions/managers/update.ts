"use server";

import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function updateManager(managerId: string, formData: FormData) {
  const manager: any = {};
  for (const key of formData.keys()) {
    const value = formData.get(key);
    manager[key] = formData.get(key);
  }

  manager["managerSalary"] = +manager["managerSalary"];

  if (!manager["location"]) delete manager?.location;
  if (manager.location) +manager?.locatioon;

  const response = await fetch(`${API_URL}/managers`, {
    method: "PATCH",
    body: JSON.stringify(manager),
    headers: {
      ...AuthHeaders(),
      "content-type": "application/json",
    },
  });

  const data = await response.json();

  if ((await response).status === 201) {
    revalidateTag("dashboard:managers", "");
    revalidateTag(`dashboard:managers:${managerId}`, "");
    redirect("/dashboard/managers");
  }
}
