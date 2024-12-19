import { toast } from "sonner";
import axios from "./axios";

const serviceForm = async (data) => {
  const toastId = toast.loading("Uploading...");
  try {
    const response = await axios.post("api/v1/service", data);
    toast.success("Uploaded Successfully", {
      id: toastId,
      autoClose: 500,
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading contact us:", error);
    toast.error("Error uploading contact us", {
      id: toastId,
      autoClose: 500,
    });
    throw error;
  }
};

export default serviceForm;
