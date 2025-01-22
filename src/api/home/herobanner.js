import axios from "./../axios";

const getHeroBanner = async () => {
  const { data } = await axios.get("api/v1/banners/public");
  return data;
};

export default getHeroBanner;
