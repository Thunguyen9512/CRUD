import React from "react";

import { Avatar, Card, CardHeader } from "LibComponents";

const ProductListItem = React.memo(({ item }) => {
  return (
    <Card variant={"outlined"}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        title={item.name}
        subheader={item.subheader}
      />
    </Card>
  );
});

export default ProductListItem;
