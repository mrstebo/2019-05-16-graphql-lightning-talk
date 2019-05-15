const resolver = {
  Query: {
    getProducts: () => [
      ...
    ],
  },
  Product: {
    id: product => product.id,
    name: product => product.name,
    description: product => product.description,
    price: product => product.price.toFixed(2),
    hidden: product => !product.live,
  }
}
