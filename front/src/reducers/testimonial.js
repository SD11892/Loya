import { ALL_SUCCESS, SAVE_INDEX } from "../actions/types";

const initialState = {
  testimonial: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ALL_SUCCESS:
      return {
        ...state,
        testimonial: payload.testimonials,
      };
    case SAVE_INDEX:
      return {
        ...state,
        testimonial: payload,
      };
    default:
      return state;
  }
}
