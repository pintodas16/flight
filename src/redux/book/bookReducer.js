import { BOOK, DELETE } from "./actionType";

const initialState = [];
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK:
      return [...state, action.payload];
    case DELETE:
      let deletedBook = state.filter((el) => {
        return el.id !== action.payload;
      });
      return deletedBook;
    default:
      return [...state];
  }
};
export default bookReducer;
