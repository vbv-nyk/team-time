import { gql } from "@apollo/client";

export const getTeams = gql`
  query Teams {
    teams {
      name
      desc
      reqs
      img
      id
    }
  }
`;
