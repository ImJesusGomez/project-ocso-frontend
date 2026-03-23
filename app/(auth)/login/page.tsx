import { Button, Input } from "@heroui/react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <div className="bg-orange-500 px-10 py-2 rounded-md w-100">
        <p className="text-3xl my-4 text-white">Iniciar Sesión</p>
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
        </div>
        <div className="flex flex-col items-center gap-2">
          <Button>Iniciar Sesión</Button>
          <p>
            ¿No tienes cuenta?{" "}
            <Link href="/signup" className="font-bold underline">
              Registrate
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
