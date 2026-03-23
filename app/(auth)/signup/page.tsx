import { Button, Input } from "@heroui/react";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <div className="bg-orange-500 px-10 py-2 rounded-md w-100">
        <p className="text-3xl my-4 text-white">Registrarse en la plataforma</p>
        <div className="flex flex-col gap-2 my-4 items-center">
          <Input
            className="w-full"
            aria-label="Email"
            type="email"
            required
            placeholder="Ingresa tu email"
          />
          <Input
            className="w-full"
            aria-label="Contraseña"
            type="password"
            required
            placeholder="Ingresa tu Contraseña"
          />
          <Input
            className="w-full"
            aria-label="Repetir Contraseña"
            type="password"
            required
            placeholder="Confirmar Contraseña"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <Button>Registrarse</Button>
          <p>
            ¿Ya tienes una cuenta?{" "}
            <Link href="/login" className="font-bold underline">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
