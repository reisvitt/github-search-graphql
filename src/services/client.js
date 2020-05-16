import ApolloClient from "apollo-boost";

const baseUrl = "https://api.github.com/graphql";

const client = new ApolloClient({
  request: (operation) => {
    operation.setContext({
      headers: {
        authorization: `token ${process.env.REACT_APP_TOKEN}`,
      },
    });
  },
  uri: baseUrl,
});

export default client;
