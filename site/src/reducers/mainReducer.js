import { CHANGE_LANGUAGE } from '../actions/types'
// const initialState = {};

export default function (state = {}, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }
  
    default:
      return state;
  }
};