import { useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

const useProductHook = () => {
	const loadData = useStoreActions(
		(actions) => actions.productList.loadDataAction,
	);
	const firstLoad = useStoreState((state) => state.productList.firstLoadState);

	useEffect(() => {
		loadData();
	}, [loadData]);

	return { firstLoad };
};

export default useProductHook;
