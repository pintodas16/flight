import bookReducer from "./book/bookReducer";
import { createStore, applyMiddleware } from "redux";

const myLogger = (store) => (next) => (action) => {
  //   console.log(action.payload.id);
  //   console.log(`action ${JSON.stringify(action)}`);
  //   console.log(`before state ${JSON.stringify(store.getState())}`);
  //   const upcomingState = [action].reduce(bookReducer, store.getState());
  //   console.log(upcomingState);
  if (action.payload.id <= 2 || action.type === "book/delete") {
    return next(action);
  }
};
export const store = createStore(bookReducer, applyMiddleware(myLogger));
