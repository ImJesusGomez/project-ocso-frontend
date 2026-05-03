import updateUser from "@/actions/users/update";
import { User } from "@/entities";
import { Input, Button } from "@heroui/react";
import { generate } from "generate-password";
import { useState } from "react";

export default function FormUpdateUser({ user }: { user: User }) {
  const { userId } = user;
  const updateUserById = updateUser.bind(null, userId);
  const [password, setPassword] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <form action={updateUserById} className="py-10 flex flex-col gap-2">
      <Input name="userEmail" aria-label="Correo Electrónico" />

      <Input
        value={password}
        type={visible ? "text" : "password"}
        name="userPassword"
        aria-label="Contraseña"
        endContent={
          <button type="button" onClick={() => setVisible(!visible)} className="text-sm">
            {visible ? "Ocultar" : "Ver"}
          </button>
        }
      />

      <Button
        variant="danger"
        type="button"
        onPress={() =>
          setPassword(
            generate({
              length: 10,
            }),
          )
        }
      >
        Generar Contraseña
      </Button>

      <Button type="submit">Actualizar Usuario</Button>
    </form>
  );
}
