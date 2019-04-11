import { Map } from 'immutable';
import { INCREMENT, DECREMENT } from 'actions/count';

const initialState = Map({
  counter: 0,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      // eslint-disable-next-line no-case-declarations
      const counterInc = state.get('counter') + 1;

      return state.merge(Map({
        counter: counterInc,
      }));
    case DECREMENT:
      // eslint-disable-next-line no-case-declarations
      const counterDec = state.get('counter') - 1;

      return state.merge(Map({
        counter: counterDec,
      }));
    default:
      return state;
  }
};
