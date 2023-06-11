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

export const getTeamById = (id: string) => gql`
  query Teams(id) {
    teams {
      name
      desc
      reqs
      img
      id
    }
  }
`;
