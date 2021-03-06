import { USER_ADDRESS } from "../../types";

// Initial State
const initialState = {
  currAddr: "λμΉλ",
};

// Reducer
const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ADDRESS:
      return {
        ...state,
        currAddr: action.payload,
      };
    default:
      return state;
  }
};

export default addressReducer;
