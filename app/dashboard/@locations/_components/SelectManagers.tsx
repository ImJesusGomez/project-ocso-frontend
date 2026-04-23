"use client";

import { Select } from "@heroui/react";
import { Location, Manager } from "../../../../entities";

export default function SelectManager({
  managers,
  locations,
  defaultManager,
}: {
  managers: Manager[];
  locations: Location[];
  defaultManager: string;
}) {
  const disabledKeys = locations
    .map((location: Location) => {
      if (location.manager?.managerId !== defaultManager) return location.manager!.managerId;
    })
    .filter((managerId) => managerId !== undefined);

  return (
    <Select
      defaultValue={defaultManager}
      aria-label="Manager"
      name="manager"
      disabledKeys={disabledKeys}
    >
      {managers.map((manager: Manager) => (
        <option key={manager.managerId} value={manager.managerId}>
          {manager.managerFullName}
        </option>
      ))}
    </Select>
  );
}
