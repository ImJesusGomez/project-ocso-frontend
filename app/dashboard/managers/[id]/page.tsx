import { API_URL } from "@/constants";
import { AuthHeaders } from "../../../../helpers/authHeaders";
import { Manager } from "@/entities";
import ManagerCard from "./_components/ManagerCard";
import DeleteManagerButton from "./_components/DeleteManagerButton";
import FormUpdateManager from "./FormUpdateManager";
import UpdateManager from "./_components/UpdateManager";

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
        <UpdateManager store={data}>
          <FormUpdateManager manager={data} />
        </UpdateManager>
        <DeleteManagerButton managerId={data.managerId} />
      </div>
    </div>
  );
}
