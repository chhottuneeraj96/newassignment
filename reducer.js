const stateReducer = (state = {stateData: "Neeraj Kumar"}, action) => {
    switch (action.type) {
      case 'CHANGE':
        return {stateData: action?.payload};
      default:
        return state;
    }
  };
  
  export default stateReducer;