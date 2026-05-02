import updateEmployee from "@/actions/employees/update";
import { Employee } from "@/entities";
import { Button, Input } from "@heroui/react";

export default function FormUpdateEmployee({ employee }: { employee: Employee }) {
  const { employeeId } = employee;

  const updateEmployeeById = updateEmployee.bind(null, employeeId);

  return (
    <form
      className="flex flex-col gap-2 p-8 rounded-md m-2 bg-orange-600 h-fit"
      action={updateEmployeeById}
    >
      <Input aria-label="Nombre" name="employeeName" defaultValue={employee.employeeName} />
      <Input
        aria-label="Apellido"
        name="employeeLastName"
        defaultValue={employee.employeeLastName}
      />
      <Input
        aria-label="Correo Electrónico"
        name="employeeEmail"
        defaultValue={employee.employeeEmail}
      />
      <Input
        aria-label="Número Telefonico"
        name="employeePhoneNumber"
        defaultValue={employee.employeePhoneNumber}
      />
      <Input
        aria-label="Foto"
        name="employeePhoto"
        type="file"
        defaultValue={employee.employeePhoto}
      />
      <Button type="submit" variant="primary">
        Actualizar Datos
      </Button>
    </form>
  );
}
