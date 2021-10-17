/* eslint-disable no-undef */
jest.mock('@apollo/client', () => {
  return {
    ApolloClient: {
      InMemoryCache: jest.fn(),
    },
    HttpLink: jest.fn(),
    _client: {InMemoryCache: jest.fn()},
  };
});

jest.mock('components/ImageCustom', () => {
  const RealComponent = jest.requireActual('react-native').View;
  return RealComponent;
});
