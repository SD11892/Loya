import { GETALL_SUCCESS } from "../actions/types";

const form = JSON.parse(localStorage.getItem("form"));
// const initialState = form;
const initialState = {
  form: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GETALL_SUCCESS:
      return {
        ...state,
        payload: payload.forms,
      };
    default:
      return state;
  }
}
