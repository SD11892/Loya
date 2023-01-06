import { ALL_SUCCESS, SAVE_INDEX, ALL_IMPORT } from "../actions/types";

const initialState = {
  testimonial: [],
  imports: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ALL_SUCCESS:
      return {
        ...state,
        testimonial: payload.testimonials,
      };
    case ALL_IMPORT:
      return {
        ...state,
        imports: payload.imports,
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
