import { createLocation } from "@/actions/locations/create";
import { API_URL } from "@/constants";
import { Input } from "@heroui/react";
import SelectManager from "./SelectManagers";
import { AuthHeaders } from "../../../../helpers/authHeaders";
import { Location, Manager } from "@/entities";
import { updateLocation } from "@/actions/locations/update";

export default async function FormUpdateLocation(store: { store: string | string[] | undefined }) {
  if (store === undefined) return null;
  if (!store) return null;

  const updateWithStoreId = updateLocation.bind(null, store);

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
  const foundLocation: Location = dataLocation.find((location) => location.locationId === +store);

  return (
    <form
      action={updateWithStoreId}
      className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg"
    >
      <h1 className="text-3xl text-white text-center">Crear Tienda</h1>
      <Input
        defaultValue={foundLocation.locationName}
        aria-label="Nombre de la tienda"
        name="locationName"
      />
      <Input
        defaultValue={foundLocation.locationAddress}
        aria-label="Dirección"
        name="locationAddress"
      />
      <Input
        defaultValue={foundLocation.locationLatLng[0]}
        aria-label="Latitud"
        name="locationLat"
      />
      <Input
        defaultValue={foundLocation.locationLatLng[1]}
        aria-label="Longitud"
        name="locationLng"
      />
      <SelectManager
        managers={dataManagers}
        locations={dataLocation}
        defaultManager={foundLocation.manager!.managerFullName}
      />
      <button type="submit" color="primary">
        Actualizar
      </button>
    </form>
  );
}
