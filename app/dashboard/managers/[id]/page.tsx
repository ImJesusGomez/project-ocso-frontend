import { API_URL } from "@/constants";
import { AuthHeaders } from "../../../../helpers/authHeaders";
import { Manager } from "@/entities";
import ManagerCard from "./ManagerCard";
import DeleteManagerButton from "../_components/DeleteManagerButton";

export default async function ManagerPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const response = await fetch(`${API_URL}/managers/${params.id}`, {
    headers: {
      ...AuthHeaders(),
    },
    next: {
      tags: [`dashboard:managers:${params.id}`, "dashboard:managers"],
    },
  });

  const data: Manager = await response.json();
  return (
    <div className="flex flex-col gap-10 grow-0">
      <ManagerCard manager={data} />
      <div className="bg-white shadow-medium rounded-md px-10 py-2">
        <DeleteManagerButton managerId={data.managerId} />
      </div>
    </div>
  );
}
