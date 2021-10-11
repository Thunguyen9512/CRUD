import React, { useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useTranslation } from "react-i18next";

import { Grid, TextField } from "LibComponents";
import { TIMEOUT_SEARCH } from "Constants";

let timeoutId = 0;

const ProductSearch = () => {
	const { t } = useTranslation();
	const [localState, setLocalState] = useState({ keyword: "" });
	const loading = useStoreState((state) => state.productList.loadingState);
	const changeParams = useStoreActions(
		(actions) => actions.productList.changeParamsAction,
	);

	const handleChange = (event) => {
		setLocalState({ keyword: event.target.value });

		clearTimeout(timeoutId);

		timeoutId = setTimeout(() => {
			changeParams({ params: { keyword: event.target.value, page: 1 } });
		}, TIMEOUT_SEARCH);
	};

	return (
		<Grid container spacing={3}>
			<Grid item xs={3}>
				<TextField
					value={localState.keyword}
					disabled={loading}
					variant={"outlined"}
					placeholder={t("search")}
					onChange={handleChange}
				/>
			</Grid>
		</Grid>
	);
};

export default ProductSearch;
