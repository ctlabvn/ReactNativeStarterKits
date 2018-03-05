/* eslint-disable */
export default {
  getList: async ({ start = 0, limit = 20, convert = 'USD' }) =>
    await fetch(
      `https://api.coinmarketcap.com/v1/ticker/?convert=${convert}&start=${start}&limit=${limit}`
    )
};
