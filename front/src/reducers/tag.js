import { TAG_GET } from "../actions/types";

const initialState = {
  tags: [],
};

export default function (state = initialState, action) {
  console.log(action);
  const { type, payload } = action;
  switch (type) {
    case TAG_GET:
      return {
        ...state,
        payload: payload.data,
      };
    default:
      return state;
  }
}
