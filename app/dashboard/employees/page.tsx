import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import EmployeeCard from "./_components/EmployeeCard";

const EmployeesPage = async () => {
  const response = await fetch(`${API_URL}/employees`, {
    headers: {
      ...AuthHeaders(),
    },
  });

  const employees: Employee[] = await response.json();

  return (
    <div className="flex flex-wrap grow-0 h-[90vh] gap-4 overflow-y-auto p-10">
      {employees.map((employee: Employee) => {
        if (employee.employeePhoto !== null) {
          return <EmployeeCard key={employee.employeeId} employee={employee} />;
        } else {
          return <EmployeeCard key={employee.employeeId} employee={employee} />;
        }
      })}
    </div>
  );
};

export default EmployeesPage;
