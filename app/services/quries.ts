import { gql } from "@apollo/client";

export const getTeams = gql`
  query Teams {
    teams {
      name
      createdBy
      desc
      reqs
      img
      id
    }
  }
`;
