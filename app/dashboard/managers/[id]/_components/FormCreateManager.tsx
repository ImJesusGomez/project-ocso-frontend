import { Location } from "@/entities";
import { Button, Input } from "@heroui/react";
import SelectStore from "./SelectStore";
import createManager from "@/actions/managers/create";

export default function FormCreateManager({ stores }: { stores: Location[] }) {
  return (
    <form action={createManager} className="flex flex-col gap-4">
      <h1 className="tetx-4xl font-bold text-white">Crear Manager</h1>
      <Input name="managerFullName" />
      <Input name="managerSalary" />
      <Input name="managerPhoneNumber" />
      <Input name="managerEmail" />
      <SelectStore store={stores} defaultStore={1} />
      <Button type="submit">Crear</Button>
    </form>
  );
}
