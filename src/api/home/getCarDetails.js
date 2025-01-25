import axios from "./../axios";

const getCarDetail = async (id) => {
  //   console.log(id);
  const res = await axios.get(`api/v1/showcases`);
  // console.log(res);
  const data =
    res?.data?.showcases.filter(
      (showcase) => showcase.car_brand == "CHANGAN"
    ) || [];
  console.log(data);
  return data;
};

export default getCarDetail;
