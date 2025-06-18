import axios from "./../axios";

const getcarDetail = async (id) => {
  //   console.log(id);
  const { data } = await axios.get(`api/v1/changan-showcase/${id}`);
  //   console.log(data);
  return data;
};

export default getcarDetail;
