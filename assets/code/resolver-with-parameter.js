const MOCK_PRODUCTS = [...Array(10).keys()].map(i => ({
  id: i+1,
  name: `Product #${i+1}`,
  description: "This is a description",
  price: (Math.random() * 100).toFixed(2),
  hidden: Math.random() > 0.5,
}));

const resolver = {
  Query: {
    getProduct: (_, { id }) => {
      return MOCK_PRODUCTS.find(p => p.id === id)
    },
  },
};
