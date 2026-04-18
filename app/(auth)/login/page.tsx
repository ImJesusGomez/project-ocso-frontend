"use client";

import { API_URL } from "@/constants";
import { Button, Input } from "@heroui/react";
import axios from "axios";
import Link from "next/link";

export default function LoginPage() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const authData: any = {};
    authData.userEmail = formData.get("userEmail");
    authData.userPassword = formData.get("userPassword");
    const { data } = await axios.post(`${API_URL}/auth/login`, {
      ...authData,
    });

    return;
  };

  return (
    <>
      <form className="bg-orange-500 px-10 py-2 rounded-md w-100" onSubmit={handleSubmit}>
        <p className="text-3xl my-4 text-white">Iniciar Sesión</p>
        <div className="flex flex-col gap-2 my-4 items-center">
          <Input
            className="w-full"
            aria-label="Email"
            type="email"
            name="userEmail"
            required
            placeholder="Ingresa tu email"
          />
          <Input
            className="w-full"
            aria-label="Contraseña"
            type="password"
            name="userPassword"
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
      </form>
    </>
  );
}
