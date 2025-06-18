import axios from "./../axios";

const getCarDetail = async (brand) => {
  console.log("brand", brand);
  const res = await axios.get(`api/v1/changan-showcase`);
  console.log("detail api", res);
  const data =
    res?.data?.data?.showcases.filter(
      (showcase) => showcase.car_brand == brand
    ) || [];
  console.log("filterqdata", data);
  return data;
};

export default getCarDetail;
