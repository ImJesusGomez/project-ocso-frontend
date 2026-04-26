import updateProvider from "@/actions/providers/update";
import { Provider } from "@/entities";
import { Button, Input } from "@heroui/react";

export default function FormUpdateProvider({ provider }: { provider: Provider }) {
  const { providerId } = provider;
  const updateProviderWithId = updateProvider.bind(null, providerId);
  return (
    <form className="flex flex-wrap gap-10 grow-0" action={updateProviderWithId}>
      <h1 className="text-2xl text-white">Actualizar Proveedor</h1>

      <Input
        defaultValue={provider.providerName}
        placeholder="Pecsi"
        aria-label="Nombre del proveedor"
        name="providerName"
      />
      <Input
        defaultValue={provider.providerEmail}
        placeholder="business@pecsi.com"
        aria-label="Correo Electrónico"
        name="providerEmail"
      />
      <Input
        defaultValue={provider.providerPhoneNumber}
        placeholder="44XXXXXX"
        aria-label="Número Teléfonico"
        name="providerPhoneNumber"
      />
      <Button type="submit">Actualizar Proveedor</Button>
    </form>
  );
}
