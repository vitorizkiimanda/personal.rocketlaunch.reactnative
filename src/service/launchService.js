import apolloClient from 'service/apollo';
import {GET_LAUNCHES} from 'constants/queries/launch';

export const GetLaunches = (pageSize, after) => {
  return apolloClient.query({
    query: GET_LAUNCHES,
    variables: {
      pageSize,
      after,
    },
  });
};
