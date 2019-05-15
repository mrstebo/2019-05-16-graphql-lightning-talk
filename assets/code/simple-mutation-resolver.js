const resolver = {
  Mutation: {
    test: (_, { x }) => {
      return x;
    },
  },
};
