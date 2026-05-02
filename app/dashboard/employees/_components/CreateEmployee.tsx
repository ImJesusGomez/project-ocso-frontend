"use client";

import { Button, Modal, ModalBody, ModalContainer, ModalHeader } from "@heroui/react";
import { ReactNode, useState } from "react";

export default function CreateEmployee({
  children,
  store,
}: {
  children: ReactNode;
  store: string | string[] | undefined;
}) {
  if (!store) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
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

function useDisclosure() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);

  const onOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  return {
    isOpen,
    onOpen,
    onOpenChange,
  };
}
