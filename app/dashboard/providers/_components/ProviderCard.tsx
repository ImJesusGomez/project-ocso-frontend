import { Provider } from "@/entities";
import { Card, CardContent, CardHeader } from "@heroui/react";

export default function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <Card className="w-full min-w-125 max-w-87.5">
      <CardHeader>{provider.providerName}</CardHeader>
      <CardContent>
        <p>
          Correo Electrónico: <b>{provider.providerEmail}</b>
        </p>
        <p>
          Número Telefonico: <b>{provider.providerPhoneNumber}</b>
        </p>
        <p>
          {provider.products.length === 1 ? (
            <>
              Producto: <b>1</b>
            </>
          ) : (
            <>
              Productos: <b>{provider.products.length}</b>
            </>
          )}
        </p>
      </CardContent>
    </Card>
  );
}
