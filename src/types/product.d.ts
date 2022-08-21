export type ProductData = {
  name: string;
  shortDescription: string;
  id: string;
  images: [
    {
      alt: string;
      asset: {
        url: string;
      };
    }
  ];
  category: {
    _id: string;
    name: string;
  };
};

export type ProductDataList = {
  data: { nodes: ProductData[] };
};
