import { setAlert } from "./alert";
import { API_ERROR, DATA_TAKKEN } from "./types";
import { request, gql } from 'graphql-request'

export const getData = () => async (dispatch) => {
  const GET_DATA = gql`
  {
    allStarships(first:100){
      starships{
        name,
        model,
        manufacturers,
        costInCredits
      }
    }
  }`;

  try {
    request("https://swapi.apis.guru/", GET_DATA).then(data => {
      dispatch({
        type: DATA_TAKKEN,
        payload: data,
      });
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: API_ERROR,
      payload: { msg: err.statusText, status: err.status },
    });
  }
};
