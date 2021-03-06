const initialState = {
  gifts: [],
  products: []
};

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case "SEND_FROM_FATHER":
      return {
        gifts: [...state.gifts, action.data]
      };
    case "ADD_PRODUCT":
      return {
        products: [...state.products, action.data]
      };
    default:
      return state;
  }
}
