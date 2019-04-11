import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunkMiddleware from 'redux-thunk';

// Store Modules
import appReducer from 'reducers/count';


export function configureStore() {
  const store = createStore(
    combineReducers({
      appReducer,
    }),
    compose(
      applyMiddleware(thunkMiddleware),
      typeof global.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
        ? global.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f,
    ),
  );

  return { store };
}

export default configureStore().store;
