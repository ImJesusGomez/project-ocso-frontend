import { API_URL } from "@/constants";
import ProductCard from "../_components/ProductCard";
import { AuthHeaders } from "../../../../helpers/authHeaders";
import UpdateProduct from "./_components/UpdateProduct";
import { Product } from "@/entities";
import DeleteProduct from "./_components/DeleteProduct";

export default async function ProductPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const response = await fetch(`${API_URL}/products/${params.id}`, {
    headers: {
      ...AuthHeaders(),
    },
    next: {
      tags: [`dashboard:products:${params.id}`],
    },
  });

  const product: Product = await response.json();
  return (
    <div className="w-full">
      <div className="bg-orange-600">
        <h1 className="w-full font-bold text-white text0center text-2xl py-2">
          Nombre: {product.productName}
        </h1>
        <h2 className="text-xl font-bold text-white text-center">Precio: ${product.price}</h2>
        <h2 className="text-md font-bold text-white text-center">
          Cant. de Sellos: {product.countSeal}
        </h2>
      </div>
      <div>
        <UpdateProduct product={product} />
        <DeleteProduct productId={product.productId} />
      </div>
    </div>
  );
}
