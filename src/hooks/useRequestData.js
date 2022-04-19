import axios from "axios";
import { useState, useEffect } from "react";

export const useRequestData = (url, initialState) => {
  const [data, setData] = useState(initialState)

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, [url])

  return data
}
