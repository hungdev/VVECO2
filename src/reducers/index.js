import { combineReducers } from "redux";
import productReducer from "./productReducer";
// import cartReducer from "./cartReducer";
// định nghĩa các reducer khác ...

const rootReducer = combineReducers({
  productReducer
  // cartReducer
  // nếu có reducer khác thì add thêm ở đây
});

export default rootReducer;
