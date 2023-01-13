import { BASE_URL, DRIVERFORM3 } from "constants/apiKeys";
import axios from "axios";

async function DeleteDriver3(id) {
  const options = {
    method: "DELETE",
    url: BASE_URL + DRIVERFORM3 + "/" + id,
  };

  try {
    const response = await axios(options);
    const data = response.data;
    if (data) {
      return { success: "Success", data: data };
    }
    if (!data) {
      return { failed: "Failed", data: data };
    }
  } catch (error) {
    return { sucess: false, error: error };
  }
}

export default DeleteDriver3;
