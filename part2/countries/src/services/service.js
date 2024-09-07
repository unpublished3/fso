import axios from "axios";
const api_key = import.meta.env.VITE_API_KEY;

const getAll = (url) => axios.get(url).then((res) => res.data);
console.log(api_key)


const weatherInfo = (url, lat, lng) =>
  axios
    .get(
      `${url}lat=${lat}&lon=${lng}&appid=${api_key}`
    )
    .then(res => res.data);

export default { getAll, weatherInfo };
