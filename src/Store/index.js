import { createStore } from "easy-peasy";

import productListModel from "./ProductList.Model";

const storeModel = {
    productList: productListModel,
};

const store = createStore(storeModel);

export default store;
