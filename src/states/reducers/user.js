const userReducer = (state = false, action) => {
  switch (action.type) {
    case 'ADMIN_LOGIN':
      return true;
    case 'POST':
      return false;
    default:
      return state;
  }
};

export default userReducer;
