const initialState = {
  valueState: true,
};

const main = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_STATE':
      return {
        ...state,
        valueState: !state.valueState,
      };
    default:
      return state;
  }
};

export default main;
