import { action, thunkOn } from "easy-peasy";

import { getProducts } from "Services/Product.Service";

const productListModel = {
  firstLoad: true,
  loading: true,
  data: [],
  params: {
    page: 1,
    per_page: 11,
    total_count: 0,
    keyword: "",
  },
  setLoading: action((state, loading) => {
    state.loading = loading;
  }),
  changeParams: action((state, { params }) => {
    state.params = { ...state.params, ...params };
  }),
  setData: action((state, { data, total_count }) => {
    state.params.total_count = total_count;
    state.data = data;
    state.loading = false;
    state.firstLoad = false;
  }),
  loadData: action((state, payload = {}) => {
    const params = payload.params || {};

    state.params = { ...state.params, ...params };
    state.loading = true;
  }),
  loadDataListener: thunkOn(
    (actions) => [actions.changeParams, actions.loadData],
    async (actions, target, { getState, getStoreState }) => {
      const { loading, params } = getState();

      if (!loading) {
        actions.setLoading(true);
      }

      try {
        const res = await getProducts(params);

        setTimeout(() => {
          actions.setData(res);
        }, 2000);
      } catch (e) {
        console.log("Nguyen C: ProductList.Model.js, F: e, N: e ", e);
        actions.setLoading(true);
      }
    }
  ),
};

export default productListModel;
