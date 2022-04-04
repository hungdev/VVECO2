const initialState = {
  users: [],
  user: null
};

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_USER":
      return {
        user: action.data
      };
    case "ADD_USERS":
      return {
        users: [...state.users, action.data]
      };
    default:
      return state;
  }
}
