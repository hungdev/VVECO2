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
    default:
      return state;
  }
}
