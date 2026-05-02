import { API_URL } from "@/constants";
import { AuthHeaders } from "../../../../helpers/authHeaders";
import { Employee } from "@/entities";
import FormUpdateEmployee from "./_components/FormUpdateEmployee";
import EmployeeDataCard from "./_components/EmployeeDataCard";
import DeleteEmployee from "./_components/DeleteEmployee";

export default async function EmployeePage({ params }: { params: { id: string } }) {
  const responseEmployee = await fetch(`${API_URL}/employees/${params.id}`, {
    headers: {
      ...AuthHeaders(),
    },
  });

  const employee: Employee = await responseEmployee.json();
  return (
    <div className="w-full h-[90vh] flex flex-row justify-center items-center">
      <EmployeeDataCard employee={employee} />
      <FormUpdateEmployee employee={employee} />
      <DeleteEmployee employeeId={employee.employeeId} />
    </div>
  );
}
