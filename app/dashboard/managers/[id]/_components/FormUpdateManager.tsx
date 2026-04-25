import updateManager from "@/actions/managers/update";
import { Button, Input } from "@heroui/react";
import SelectStore from "./SelectStore";
import { API_URL } from "@/constants";
import { AuthHeaders } from "../../../../../helpers/authHeaders";
import { Manager } from "@/entities";

export default async function FormUpdateManager({ manager }: { manager: Manager }) {
  const updateManagerWithId = updateManager.bind(null, manager.managerId);
  const responseStores = await fetch(`${API_URL}/locations`, {
    headers: {
      ...AuthHeaders(),
    },
  });

  const stores = await responseStores.json();
  return (
    <form action={updateManagerWithId} className="bg-orange-400 rounded-md">
      <h1>Actualizar Manager</h1>
      <Input
        defaultValue={manager.managerFullName}
        placeholder="Marco Aurelio"
        name="managerFullName"
      />
      <Input
        defaultValue={manager.managerEmail}
        placeholder="manager@gmail.com"
        name="managerEmail"
      />
      <Input defaultValue={manager.managerSalary} placeholder="12000" name="managerSalary" />
      <Input
        defaultValue={manager.managerPhoneNumber}
        placeholder="12000"
        name="managerPhoneNumber"
      />
      <SelectStore store={stores} defaultStore={manager.location.locationId} />
      <Button type="submit">Actualizar</Button>
    </form>
  );
}
