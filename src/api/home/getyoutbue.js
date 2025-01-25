import axios from "./../axios";

const getYouTubes = async () => {
  const { data } = await axios.get("api/v1/youtube");
  return data;
};

export default getYouTubes;
