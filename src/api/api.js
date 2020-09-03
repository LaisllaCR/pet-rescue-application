import axios from "axios";
import env from "./env";

export const fetchPets = () => {
  let config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  };
  let toAllowCross = "https://cors-anywhere.herokuapp.com/";
  let url = toAllowCross + "v1/pets";

  return axios
    .get(url, config)
    .then((resp) => resp.data)
    .catch((ex) => console.log(`O seguinte erro foi gerado: ` + ex, "error")); //Swal.fire('Oops', )
};

export default fetchPets;
