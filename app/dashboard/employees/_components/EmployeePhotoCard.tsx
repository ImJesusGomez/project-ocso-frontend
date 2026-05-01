import { Employee } from "@/entities";
import { Button, Card, CardContent, CardFooter, CardHeader, Link } from "@heroui/react";
import Image from "next/image";

export default function EmployeePhotoCard({ employee }: { employee: Employee }) {
  return (
    <Card className="max-h-72">
      <CardHeader className="absolute top-0 bg-black bg-opacity-25 z-10">
        <h1 className="font-bold text-xl text-white drop-shadow-sm">
          {employee.employeeName + " " + employee.employeeLastName}
        </h1>
      </CardHeader>
      <Image
        src={employee.employeePhoto!}
        width={288}
        height={288}
        className="object-cover z-0"
        alt="foto de perfil"
      />
      <CardFooter className="absolute bottom-0 py-2 top-10">
        <Link href={`/dashboard/employees/${employee.employeeId}`}>
          <Button variant="ghost">Actualizar Datos</Button>
        </Link>{" "}
      </CardFooter>
    </Card>
  );
}
