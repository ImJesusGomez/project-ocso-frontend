import ModalGeneric from "@/app/dashboard/_components/Modal";
import { Manager } from "@/entities";
import { Card, CardHeader, CardContent } from "@heroui/react";
import FormUpdateUser from "./FormUpdateUser";

export default function ManagerCard({ manager }: { manager: Manager }) {
  return (
    <>
      <Card>
        <CardHeader>
          <p> {manager.managerFullName}</p>
          {manager.user ? (
            <ModalGeneric store={undefined}>
              <FormUpdateUser user={manager.user} />
            </ModalGeneric>
          ) : (
            <ModalGeneric store={undefined}>
              <FormUpdateUser user={manager.user} />
            </ModalGeneric>
          )}
        </CardHeader>
        <CardContent>
          <p>{manager.managerEmail}</p>
          <p>{manager.managerPhoneNumber}</p>
          <p>${manager.managerSalary}</p>
        </CardContent>
      </Card>
    </>
  );
}
