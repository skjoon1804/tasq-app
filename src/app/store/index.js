import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
import { reducer } from './reducer';
import * as sagas from './sagas';
import * as mutations from './mutations';

export const store = createStore(
    reducer,
    // applyMiddleware(createLogger(), sagaMiddleware)      // For Debugging purpose
    applyMiddleware(sagaMiddleware)
);

for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
}