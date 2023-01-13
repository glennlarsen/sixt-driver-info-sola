import { BASE_URL, DRIVERFORM3 } from "constants/apiKeys";
import axios from "axios";

async function SendDriverInfo3(data) {
  const formData = new FormData();

  const newInfo = {
    country: data.country,
    street: data.street,
    postal: data.postal,
    city: data.city,
    phone: data.tel,
    email: data.email,
  };

  formData.append("data", JSON.stringify(newInfo));

  const options = {
    method: "POST",
    data: formData,
    url: BASE_URL + DRIVERFORM3,
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

export default SendDriverInfo3;
