import {gql} from '@apollo/client';

export const GET_LAUNCHES = gql`
  query launches($pageSize: Int, $after: String) {
    launches(pageSize: $pageSize, after: $after) {
      cursor
      hasMore
      launches {
        id
        site
        mission {
          name
          missionPatch
        }
        rocket {
          id
          name
          type
        }
        isBooked
      }
    }
  }
`;
