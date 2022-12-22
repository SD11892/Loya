import { TEST_SUCCESS } from "../actions/types";

const initialState = {
  testForms: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TEST_SUCCESS:
      return {
        ...state,
        payload: payload.forms,
      };
    default:
      return state;
  }
}
