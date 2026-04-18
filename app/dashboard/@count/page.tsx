import axios from "axios";

const CountPage = async () => {
  const { data } = await axios.get("localhost:4000/locations");

  return data.length;
};

export default CountPage;
