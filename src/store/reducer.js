import { initialState } from "./initialState";
import { NEW_API_DATA, SET_SEARCH_INPUT, SET_TEMP_INPUT } from "./types";

//create the logic that manipulates the state
export function reducer(state = initialState, action) {
  switch (action.type) {
    case NEW_API_DATA:
      return { ...state, weather: action.payload };

    case SET_SEARCH_INPUT:
      return { ...state, searchInput: action.payload };

    case SET_TEMP_INPUT:
      return { ...state, tempInput: action.payload };

    default:
      console.log("Reducer started or INVALID reducer type, probably a typo");
      return state;
  }
}
