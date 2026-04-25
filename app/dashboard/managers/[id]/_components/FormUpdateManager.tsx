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
    <form
      action={updateManagerWithId}
      className="bg-orange-400 rounded-md flex flex-col grow-0 gap-2"
    >
      <h1 className="text-2xl text-white text-center font-semibold">Actualizar Manager</h1>
      <Input
        aria-label="Nombre Completo"
        defaultValue={manager.managerFullName}
        placeholder="Marco Aurelio"
        name="managerFullName"
      />
      <Input
        aria-label="Correo Electrónico"
        defaultValue={manager.managerEmail}
        placeholder="manager@gmail.com"
        name="managerEmail"
      />
      <Input
        aria-label="Salario"
        defaultValue={manager.managerSalary}
        placeholder="12000"
        name="managerSalary"
      />
      <Input
        aria-label="Número Telefonico"
        defaultValue={manager.managerPhoneNumber}
        placeholder="12000"
        name="managerPhoneNumber"
      />
      <SelectStore store={stores} defaultStore={manager.location.locationId} />
      <Button type="submit">Actualizar</Button>
    </form>
  );
}
