import { store } from "../main";
import axios from "axios";
import { NEW_API_DATA } from "../store/types";

export const getApiData = async (location) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=37b29f091f8754cf8600dea56dee3863`
  );

  store.dispatch({ type: NEW_API_DATA, payload: data });
};
