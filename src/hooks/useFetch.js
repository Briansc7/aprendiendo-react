import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (endpoint, initial) => {
  const [data, setData] = useState(initial);

  useEffect(() => {
    const getData = async () => {
      let res = axios.get(endpoint);
      let resultado = await res;
      setData(resultado.data);
    };

    getData();
  }, [endpoint]);

  return [data];
};
