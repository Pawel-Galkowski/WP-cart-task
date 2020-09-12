import axios from "axios";
import { setAlert } from "./alert";
import {
  FORM_ERROR,
  FORM_SEND,
} from "./types";

export const standardMailer = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/forms/standard-mailer", formData, config);

    dispatch({
      type: FORM_SEND,
      payload: res.data,
    });

    dispatch(setAlert("Message send", "success"));
  } catch (err) {
    dispatch({
      type: FORM_ERROR,
      payload: { msg: err.statusText, status: err.status },
    });
  }
};