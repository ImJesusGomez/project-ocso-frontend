"use client";

import { API_URL } from "@/constants";
import { Button, Input, Spinner } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LoginPage() {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    setSubmitting(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    const authData: any = {};
    authData.userEmail = formData.get("userEmail");
    authData.userPassword = formData.get("userPassword");

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify(authData),
        credentials: "include",
      });
      if (response.status === 201) router.push("/dashboard");
    } catch (e) {
      setSubmitting(false);
    }

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
          <Button type="submit" isDisabled={submitting}>
            {submitting ? "Enviando..." : "Iniciar Sesión"}
          </Button>
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
