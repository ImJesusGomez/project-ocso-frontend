import { createLocation } from "@/actions/locations/create";
import { API_URL, TOKEN_NAME } from "@/constants";
import { Input } from "@heroui/react";
import axios from "axios";
import { cookies } from "next/headers";
import SelectManager from "./SelectManagers";

export default async function FormNewLocation() {
  const cookieStore = await cookies();
  const token = cookieStore.get(TOKEN_NAME)?.value;

  const responseManagers = await axios.get(`${API_URL}/managers`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const responseLocation = await axios.get(`${API_URL}/locations`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return (
    <form action={createLocation}>
      <Input aria-label="Nombre de la tienda" name="locationName" />
      <Input aria-label="Dirección" name="locationAddress" />
      <Input aria-label="Latitud" name="locationLat" />
      <Input aria-label="Longitud" name="locationLng" />
      <SelectManager managers={responseManagers.data} locations={responseLocation.data} />
      <button type="submit">Subir</button>
    </form>
  );
}
