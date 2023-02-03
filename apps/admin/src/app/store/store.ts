import { compose, createStore, applyMiddleware, Middleware } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { rootReducer } from "./root-reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};

const middleWares = [
  process.env["NODE_ENV"] === "development" && logger,
  thunk,
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composeEnhancer =
  (process.env["NODE_ENV"] !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage,
  blacklist: [],
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, composedEnhancers);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
