import updateProduct from "@/actions/products/update";
import { Product } from "@/entities";
import { Button, Input } from "@heroui/react";
import SelectProvider from "../../_components/SelectProvider";
import DeleteProduct from "./DeleteProduct";
import { LuCheck } from "react-icons/lu";

export default function UpdateProduct({ product }: { product: Product }) {
  const { productId } = product;
  const updateProductById = updateProduct.bind(null, productId);
  return (
    <form action={updateProductById} className="p-10 flex flex-col">
      <Input name="productName" aria-label="Nombre" defaultValue={product.productName} />
      <Input name="price" aria-label="Precio" defaultValue={product.price} />
      <Input name="countSeal" aria-label="Num. de Sellos" defaultValue={product.countSeal} />
      <SelectProvider />
      <div className="flex flex-row gap-10 grow-0">
        <Button type="submit">
          <LuCheck size={20} />
        </Button>
        <DeleteProduct productId={product.productId} />
      </div>
    </form>
  );
}
