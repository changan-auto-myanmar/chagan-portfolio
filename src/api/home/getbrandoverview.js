import axios from "./../axios";

const getbrandOverview = async () => {
  //   console.log(id);
  const { data } = await axios.get(`api/v1/car-overview`);
  //   console.log(data);
  return data;
};

export default getbrandOverview;
