import { API_URL } from "@/constants";
import { AuthHeaders } from "../../../../helpers/authHeaders";
import { Card, CardContent, CardHeader } from "@heroui/react";
import { Manager } from "@/entities";

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
    <Card>
      <CardHeader>{data.managerFullName}</CardHeader>
      <CardContent>
        <p>{data.managerEmail}</p>
        <p>{data.managerPhoneNumber}</p>
      </CardContent>
    </Card>
  );
}
