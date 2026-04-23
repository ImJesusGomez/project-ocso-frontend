import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import { Card, CardContent, CardHeader } from "@heroui/react";

export default async function EmployeesLocation({
  store,
}: {
  store: string | string[] | undefined;
}) {
  const response = await fetch(`${API_URL}/employees/location/${store}`, {
    method: "GET",
    headers: {
      ...AuthHeaders(),
    },
    next: {
      tags: ["dashboard:locations:employees"],
    },
  });

  const data: Employee[] = await response.json();

  return data.map((employee: Employee) => {
    const fullName = employee.employeeName + " " + employee.employeeLastName;
    return (
      <Card className="mx-10 my-10" key={employee.employeeId}>
        <CardHeader>
          <p className="w-full">
            Nombre: <b>{fullName}</b>
          </p>
        </CardHeader>

        <CardContent>
          <p className="w-full">
            Email: <b>{employee.employeeEmail}</b>
          </p>
          <p className="w-full">
            Teléfono: <b>{employee.employeePhoneNumber}</b>
          </p>
        </CardContent>
      </Card>
    );
  });
}
