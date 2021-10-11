import React from "react";

import { Grid, Skeleton } from "LibComponents";

const ProductSkeleton = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Skeleton variant="rect" width={"100%"} height={118} />
      </Grid>
      <Grid item xs={3}>
        <Skeleton variant="rect" width={"100%"} height={118} />
      </Grid>
    </Grid>
  );
};

export default ProductSkeleton;
