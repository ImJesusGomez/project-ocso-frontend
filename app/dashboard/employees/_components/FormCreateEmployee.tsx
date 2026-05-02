import createEmployee from "@/actions/employees/create";
import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { Button, Input } from "@heroui/react";
import SelectLocation from "./SelectLocation";

export default async function FormCreateEmployee() {
  const responseLocation = await fetch(`${API_URL}/locations`, {
    headers: {
      ...AuthHeaders(),
    },
  });

  const locations = await responseLocation.json();
  return (
    <form
      className="flex flex-col gap-2 p-8 rounded-md m-2 bg-orange-600 h-fit"
      action={createEmployee}
    >
      <Input aria-label="Nombre" name="employeeName" />
      <Input aria-label="Apellido" name="employeeLastName" />
      <Input aria-label="Correo Electrónico" name="employeeEmail" />
      <Input aria-label="Número Telefonico" name="employeePhoneNumber" />
      <Input aria-label="Foto" name="employeePhoto" type="file" />
      <SelectLocation store={locations} />
      <Button type="submit" variant="primary">
        Crear
      </Button>
    </form>
  );
}
