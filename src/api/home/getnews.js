import axios from "./../axios";

const getNews = async () => {
  const { data } = await axios.get("api/v1/csr/public");
  return data;
};

export default getNews;
