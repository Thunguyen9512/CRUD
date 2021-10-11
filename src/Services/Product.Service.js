const data = [
  { id: 1, name: "Data 1", subheader: "September 14, 2016" },
  { id: 2, name: "Data 2", subheader: "September 4, 2016" },
];

export const getProducts = async (params) => {
  if (params.keyword) {
    const arr = data.filter((item) => item.name.includes(params.keyword));

    return {
      data: arr,
      total_count: arr.length,
    };
  }

  return {
    data,
    total_count: 2,
  };
};
