const initialState = {
  app: true,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_STATE':
      return !state.app;
    default:
      return state;
  }
};

export default app;
