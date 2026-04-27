import { Button } from "@heroui/react";
import { LuTrash } from "react-icons/lu";
import deleteProduct from "@/actions/products/delete";

export default function DeleteProduct({ productId }: { productId: string }) {
  const deleteProductById = deleteProduct.bind(null, productId);

  return (
    <form action={deleteProductById} className="flex w-full">
      <Button type="submit">Estoy seguro</Button>
      <LuTrash size={20} />
    </form>
  );
}
