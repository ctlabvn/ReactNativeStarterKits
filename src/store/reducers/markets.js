const init = {
  data: [],
  loading: false,
  hasMore: true
};

export default (state = init, { type, payload }) => {
  switch (type) {
    case 'markets/fetchingSuccess':
      return { ...state, ...payload };
    default:
      return state;
  }
};
