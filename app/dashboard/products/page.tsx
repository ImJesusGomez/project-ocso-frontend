import createProduct from "@/actions/products/create";
import { Button, Input } from "@heroui/react";
import SelectProvider from "./_components/SelectProvider";

const ProductPage = async () => {
  return (
    <form className="px-10 justify-center pt-10" action={createProduct}>
      <div className="flex flex-col bg-orange-600 p-10 rounded-md  gap-6 ">
        <h1 className="text-2xl font-bold">Crear Producto</h1>
        <Input aria-label="Nombre" name="productName" />
        <Input aria-label="Precio" name="price" />
        <Input aria-label="Num. de Sellos" name="countSeal" />
        <SelectProvider />
        <Button type="submit">Crear</Button>
      </div>
    </form>
  );
};

export default ProductPage;
