import { Employee, Location } from "@/entities";
import EmployeeCard from "./EmployeeCard";
import { useState } from "react";
import { Select } from "@heroui/react";

export default function ListEmployees({
  employees,
  location,
}: {
  employees: Employee[];
  location: Location[];
}) {
  const [filter, setFilter] = useState<number | null>(null);

  return (
    <>
      <Select
        placeholder="Filtrar por ubicación"
        onChange={(e) => {
          setFilter(Number(e.target.value));
        }}
      >
        <option value="">Todas</option>

        {location.map((loc) => (
          <option key={loc.locationId} value={loc.locationId}>
            {loc.locationName}
          </option>
        ))}
      </Select>

      {employees
        .filter((employee) => (filter ? employee.location?.locationId === filter : true))
        .map((employee) => (
          <EmployeeCard key={employee.employeeId} employee={employee} />
        ))}
    </>
  );
}
