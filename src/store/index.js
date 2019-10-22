import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import appSagas from 'src/sagas';
import appReducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(appReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(appSagas, store.dispatch);

export default store;