import { Product } from "@/entities";
import { Card, CardContent, CardHeader } from "@heroui/react";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="max-w-87.5 ">
      <CardHeader>{product.productName}</CardHeader>
      <CardContent>
        <p>
          Nombre del producto: <b>{product.productName}</b>
        </p>
        <p>
          Precio del producto: <b>${product.price}</b>
        </p>
        <p>
          Proveedor:
          <Link href={{ pathname: `/dashboard/providers/${product.provider.providerId}` }}>
            <b>${product.provider.providerName}</b>
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
