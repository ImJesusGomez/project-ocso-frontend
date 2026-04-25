import { Manager } from "@/entities";
import { Card, CardHeader, CardContent } from "@heroui/react";

export default function ManagerCard({ manager }: { manager: Manager }) {
  return (
    <>
      <Card>
        <CardHeader>{manager.managerFullName}</CardHeader>
        <CardContent>
          <p>{manager.managerEmail}</p>
          <p>{manager.managerPhoneNumber}</p>
          <p>${manager.managerSalary}</p>
        </CardContent>
      </Card>
    </>
  );
}
