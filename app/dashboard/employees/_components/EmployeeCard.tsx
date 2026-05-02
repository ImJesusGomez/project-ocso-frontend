import { Employee } from "@/entities";
import { Button, Card, CardContent, CardFooter, CardHeader, Link } from "@heroui/react";

export default function EmployeeCard({ employee }: { employee: Employee }) {
  return (
    <Card className="max-h-72 size-72 min-h-72">
      <CardHeader>
        <h1 className="font-bold text-xl">
          {employee.employeeName + " " + employee.employeeLastName}
        </h1>
      </CardHeader>
      <CardContent>
        <p>Correo: {employee.employeeEmail}</p>
        <p>Número de teléfono: {employee.employeePhoneNumber}</p>
      </CardContent>
      <CardFooter className="absolute bottom-0 py-2 top-10">
        <Link href={`/dashboard/employees/${employee.employeeId}`}>
          <Button variant="ghost">Actualizar Datos</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
