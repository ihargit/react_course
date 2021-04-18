import { actionTypes } from '../Actions';
const { modalRequested, modalClosed } = actionTypes;

export default function modalReducer(state = null, { type, payload }) {
  switch (type) {
    case modalRequested:
      return { ...state, ...payload };
    case modalClosed:
      return { ...state, ...payload };
    default:
      return state;
  }
}