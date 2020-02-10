import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { GameReducer } from "./Game/reducers"

const rootReducer = combineReducers({
    game: GameReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export function configureStore() {
    const middleWareEnhancer = applyMiddleware(...[
        // some middlewares here
    ]);

    const store = createStore(
        rootReducer,
        composeWithDevTools(middleWareEnhancer)
    );
    return store;
};