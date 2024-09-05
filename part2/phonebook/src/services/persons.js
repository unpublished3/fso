import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl).then((res) => res.data);
};

const addNew = person => {
  return axios.post(baseUrl, person).then(res => res.data);
}

export default { getAll, addNew };
