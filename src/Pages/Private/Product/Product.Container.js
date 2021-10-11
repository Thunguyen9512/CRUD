import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import { Container, Grid } from "LibComponents";

import useProductHook from "./Product.Hook";

import ProductList from "./ProductList.Component";
import ProductSearch from "./ProductSearch.Component";
import ProductSkeleton from "./ProductSkelecton.Component";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      padding: theme.spacing(3),
    },
  })
);

const Product = () => {
  const styles = useStyles();
  const { firstLoad } = useProductHook();

  return (
    <Container classes={{ root: styles.container }} maxWidth={"lg"}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ProductSearch />
        </Grid>
        <Grid item xs={12}>
          {firstLoad && <ProductSkeleton />}
          {!firstLoad && <ProductList />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Product;
