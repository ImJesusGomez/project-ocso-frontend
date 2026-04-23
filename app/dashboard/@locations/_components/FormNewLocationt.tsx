import { createLocation } from "@/actions/locations/create";
import { API_URL } from "@/constants";
import { Input } from "@heroui/react";
import SelectManager from "./SelectManagers";
import { AuthHeaders } from "../../../../helpers/authHeaders";
import { Location, Manager } from "@/entities";

export default async function FormNewLocation(store: { store: string | string[] | undefined }) {
  if (store) return null;

  const responseManagers = await fetch(`${API_URL}/managers`, {
    headers: {
      ...AuthHeaders(),
    },
    next: {
      tags: ["dashboard:managers", "dashboard:locations:managers"],
    },
  });

  const dataManagers: Manager[] = await responseManagers.json();

  const responseLocation = await fetch(`${API_URL}/locations`, {
    headers: {
      ...AuthHeaders(),
    },
    next: {
      tags: ["dashboard:locations"],
    },
  });

  const dataLocation: Location[] = await responseLocation.json();
  return (
    <form
      action={createLocation}
      className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg"
    >
      <h1 className="text-3xl text-white text-center">Crear Tienda</h1>
      <Input aria-label="Nombre de la tienda" name="locationName" />
      <Input aria-label="Dirección" name="locationAddress" />
      <Input aria-label="Latitud" name="locationLat" />
      <Input aria-label="Longitud" name="locationLng" />
      <SelectManager managers={dataManagers} locations={dataLocation} />
      <button type="submit" color="primary">
        Subir
      </button>
    </form>
  );
}
