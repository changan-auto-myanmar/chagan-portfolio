import axios from "./../axios";

const getCarDetail = async (brand) => {
  console.log(brand);
  const res = await axios.get(`api/v1/showcases`);
  console.log(res);
  const data =
    res?.data?.data?.showcases.filter(
      (showcase) => showcase.car_brand == brand
    ) || [];
  // console.log(data);
  return data;
};

export default getCarDetail;
