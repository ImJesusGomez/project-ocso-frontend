"use server";

import { API_URL } from "@/constants";
import { AuthHeaders } from "../../helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { Location } from "@/entities";
import { redirect } from "next/navigation";

export async function updateLocation(store: string, formData: FormData) {
  const location: Record<string, any> = {};
  const locationLatLng: [number, number] = [0, 0];

  for (const key of formData.keys()) {
    const value = formData.get(key);

    if (!value) continue;

    if (key === "locationLat") {
      locationLatLng[0] = Number(value);
    } else if (key === "locationLng") {
      locationLatLng[1] = Number(value);
    } else {
      location[key] = value;
    }
  }

  location.locationLatLng = locationLatLng;

  const response = await fetch(`${API_URL}/locations`, {
    method: "PATCH",
    body: JSON.stringify(location),
    headers: {
      "content-type": "application/json",
      ...AuthHeaders(),
    },
  });

  const { locationId }: Location = await response.json();

  if (response.status === 201) {
    revalidateTag("dashboard:locations", "");
    revalidateTag(`dashboard:locations:${store}`, "");
    redirect(`/dashboard?store=${locationId}`);
  }
}
