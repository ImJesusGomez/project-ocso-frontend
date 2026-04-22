import { TOKEN_NAME } from "@/constants";
import axios from "axios";
import { cookies } from "next/headers";

const CountPage = async () => {
  const userCookies = await cookies();
  const token = userCookies.get(TOKEN_NAME)?.value;
  const { data } = await axios.get("localhost:4000/locations", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return `Hay ${data.length} tiendas`;
};

export default CountPage;
