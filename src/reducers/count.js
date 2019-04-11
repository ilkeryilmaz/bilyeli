import { INCREMENT, DECREMENT } from 'actions/count';

const initialState = {
  counter: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1,
      };
    case DECREMENT:
      if (state.counter === 0) {
        return state;
      }
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
