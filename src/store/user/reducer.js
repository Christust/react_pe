const initialState = {
  user: null,
};

const userApp = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      state.user = action.payload;
      if (action.payload) {
        localStorage.setItem("user-profile", JSON.stringify(action.payload));
      } else {
        localStorage.removeItem("user-profile");
      }
    default:
      return state;
  }
};

export default userApp;
