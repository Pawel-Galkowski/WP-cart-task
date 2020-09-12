import axios from "axios";
import { setAlert } from "./alert";
import { API_ERROR, DATA_TAKKEN } from "./types";

export const getData = () => async (dispatch) => {
  const data = JSON.stringify({
    query: `
    {
    allStarships(first:100){
      starships{
        name,
        model,
        manufacturers,
        costInCredits
      }
    }
  }`,
    variables: {},
  });

  const config = {
    url: "https://swapi.apis.guru/",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    const res = await axios.get(config);

    dispatch({
      type: DATA_TAKKEN,
      payload: res.data,
    });

    dispatch(setAlert("Message send", "success"));
  } catch (err) {
    dispatch({
      type: API_ERROR,
      payload: { msg: err.statusText, status: err.status },
    });
  }
};
