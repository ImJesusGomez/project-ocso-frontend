import createProvider from "@/actions/providers/create";
import { Button, Input } from "@heroui/react";

export default function FormCreateProvider() {
  return (
    <form action={createProvider} className="flex flex-col grow-0 gap-2">
      <h1 className="text-2xl text-white">Crear Proveedor</h1>
      <Input placeholder="Pecsi" aria-label="Nombre del proveedor" name="providerName" />
      <Input
        placeholder="business@pecsi.com"
        aria-label="Correo Electrónico"
        name="providerEmail"
      />
      <Input placeholder="44XXXXXX" aria-label="Número Teléfonico" name="providerPhoneNumber" />
      <Button type="submit">Crear Proveedor</Button>
    </form>
  );
}
