import { toast } from "sonner";
import axios from "./axios";

const uplaodContactUs = async (data) => {
  try {
    const response = await axios.post("api/v1/mail-box", data);

    return response.data;
  } catch (error) {
    toast.error("Error uploading contact us", {
      autoClose: 500,
    });
    throw error;
  }
};

export default uplaodContactUs;
