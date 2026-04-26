import { Button } from "@heroui/react";
import DeleteProvider from "./DeleteProvider";
import deleteProvider from "@/actions/providers/delete";

export default function DeleteProviderButton({ providerId }: { providerId: string }) {
  const deleteProviderById = deleteProvider.bind(null, providerId);

  return (
    <form action={deleteProviderById}>
      <Button type="submit">Estoy seguro</Button>
    </form>
  );
}
