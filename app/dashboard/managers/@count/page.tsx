import { API_URL } from "@/constants";
import { AuthHeaders } from "../../../../helpers/authHeaders";
import { Manager } from "@/entities";

export default async function CountManagersPage() {
  const response = await fetch(`${API_URL}/managers`, {
    headers: {
      ...AuthHeaders(),
    },
    next: {
      tags: ["dashboard:managers"],
    },
  });

  const managers: Manager[] = await response.json();
  const countNoStore = managers.filter((manager: Manager) => !manager.location).length;
  let max: number = 0;
  let salary = 0;
  managers.forEach((manager: Manager) => {
    if (manager.managerSalary > max) max = manager.managerSalary;
    salary += manager.managerSalary;
  });

  return (
    <>
      <div className="w-fit px-2 py-4 text-center">
        <h1>
          Hay {managers.length} manager {managers.length > 1 ? "s" : ""}
        </h1>
        <h1>Hay {countNoStore} sin tienda</h1>
        <h1>El salario máximo es {max} sin tienda</h1>
        <h1>El salario promedio es {salary / managers.length}</h1>
      </div>
    </>
  );
}
