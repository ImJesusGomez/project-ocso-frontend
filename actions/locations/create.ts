"use server";

import { API_URL, TOKEN_NAME } from "@/constants";
import axios from "axios";
import { cookies } from "next/headers";

export async function createLocation(formData: FormData) {
  const location: Record<string, any> = {};
  const locationLatLng: [number, number] = [0, 0];
  const token = await cookies.get(TOKEN_NAME).value;

  if (!token) return null;

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

  axios.post(
    `${API_URL}/locations`,
    {
      ...location,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
}
