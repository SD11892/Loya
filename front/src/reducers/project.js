import { ALL_PROJECT } from "../actions/types";

// const initialState = form;
const initialState = {
  payload: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ALL_PROJECT:
      return {
        ...state,
        payload: payload.projects,
      };
    default:
      return state;
  }
}
