import { API_URL } from "@/constants";
import ModalGeneric from "../_components/Modal";
import FormCreateManager from "./[id]/_components/FormCreateManager";
import { AuthHeaders } from "../../../helpers/authHeaders";
import { Location } from "@/entities";

export const ManagersPage = async () => {
  const responseStores = await fetch(`${API_URL}/locations`, {
    headers: {
      ...AuthHeaders(),
    },
  });

  const stores: Location[] = responseStores.json();
  return (
    <ModalGeneric store={undefined}>
      <FormCreateManager />
    </ModalGeneric>
  );
};

export default ManagersPage;
