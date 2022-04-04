import { combineReducers } from "redux";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
// định nghĩa các reducer khác ...

const rootReducer = combineReducers({
  productReducer,
  userReducer
  // cartReducer
  // nếu có reducer khác thì add thêm ở đây
});

export default rootReducer;
