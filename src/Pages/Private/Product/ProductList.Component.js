import React from "react";
import { useStoreState } from "easy-peasy";
import styles from "./ProductList.Module.scss";

import { Grid } from "LibComponents";

import ProductListItem from "./ProductListItem.Component";
import ProductListLoading from "./ProductListLoading.Component";

const ProductList = () => {
	const {
		data,
		loading,
		params: { total_count },
	} = useStoreState((state) => state.productList);

	if (!loading && total_count < 1) {
		return <div>Empty</div>;
	}

	return (
		<div className={styles.list}>
			{loading && <ProductListLoading />}
			<Grid container spacing={3}>
				{data.map((item) => (
					<Grid item key={item.id} xs={3}>
						<ProductListItem item={item} />
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default ProductList;
