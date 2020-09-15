import { setAlert } from "./alert";
import { API_ERROR, DATA_TAKKEN } from "./types";
import { GraphQLClient, gql } from "graphql-request";

export const getData = () => async (dispatch) => {
  const endpoint = "https://swapi.apis.guru/";

  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    {
      allStarships(first: 100) {
        starships {
          id
          name
          model
          manufacturers
          costInCredits
        }
      }
    }
  `;

  try {
    const res = await graphQLClient.request(query);
    dispatch({
      type: DATA_TAKKEN,
      payload: res.allStarships.starships,
    });
  } catch (err) {
    dispatch({
      type: API_ERROR,
      payload: { msg: err.statusText, status: err.status },
    });
  }
};
