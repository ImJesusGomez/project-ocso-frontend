"use client";

import { Button, Modal, ModalBody, ModalContainer, ModalHeader } from "@heroui/react";
import { ReactNode } from "react";

export default function UpdateLocation({
  children,
  store,
}: {
  children: ReactNode;
  store: string | string[] | undefined;
}) {
  if (!store) return <div></div>;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContainer>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>{children}</ModalBody>
            </>
          )}
        </ModalContainer>
      </Modal>
    </>
  );
}

function useDisclosure(): { isOpen: any; onOpen: any; onOpenChange: any } {
  throw new Error("Function not implemented.");
}
