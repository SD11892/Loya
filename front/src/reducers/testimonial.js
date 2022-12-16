import { ALL_SUCCESS } from "../actions/types";

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
    default:
      return state;
  }
}
