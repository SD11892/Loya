import { WALL_SUCCESS } from "../actions/types";

const initialState = {
  walls: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case WALL_SUCCESS:
      return {
        ...state,
        payload: payload.walls,
      };
    default:
      return state;
  }
}
