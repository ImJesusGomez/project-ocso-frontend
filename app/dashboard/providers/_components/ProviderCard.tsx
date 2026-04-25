import { Provider } from "@/entities";
import { Card, CardContent, CardHeader } from "@heroui/react";

export default function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <Card className="w-4/12">
      <CardHeader>{provider.providerName}</CardHeader>
      <CardContent>
        <p>
          Correo Electrónico: <b>{provider.providerEmail}</b>
        </p>
        <p>
          Número Telefonico: <b>{provider.providerPhoneNumber}</b>
        </p>
        <p>
          Productos: <b>{provider.products.length}</b>
        </p>
      </CardContent>
    </Card>
  );
}
