import {ApolloClient, InMemoryCache} from '@apollo/client';
import apiConfig from 'config/api';

const makeApolloClient = () => {
  const apolloClient = new ApolloClient({
    cache: new InMemoryCache({}),
    uri: apiConfig.getBaseUrl(),
  });

  return apolloClient;
};

const apolloClient = makeApolloClient();
export default apolloClient;
