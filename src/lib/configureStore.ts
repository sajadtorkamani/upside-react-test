import {
  applyMiddleware,
  Reducer,
  PreloadedState,
  Store,
  createStore
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

/**
 * Create redux store.
 *
 * @param reducer
 * @param initialState
 */
function configureStore<S = any>(
  reducer: Reducer<S, any>,
  initialState?: PreloadedState<S>
): Store<S> {
  const middleware = [thunk];

  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  return store;
}

export default configureStore;
