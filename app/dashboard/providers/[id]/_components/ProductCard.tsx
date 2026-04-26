import { Product } from "@/entities";
import { Card, CardContent, CardHeader } from "@heroui/react";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="max-w-87.5">
      <CardHeader>{product.productName}</CardHeader>
      <CardContent>
        <p>
          Nombre del producto: <b>{product.productName}</b>
        </p>
        <p>
          Precio del producto: <b>${product.price}</b>
        </p>
      </CardContent>
    </Card>
  );
}
