import axios from "./../axios";

const getNewDetail = async (id) => {
  //   console.log(id);
  const { data } = await axios.get(`api/v1/csr/public/${id}`);
  //   console.log(data);
  return data;
};

export default getNewDetail;
