import { gql } from "@apollo/client";

export const createTeam = (
  name: string,
  desc: string,
  reqs: string[],
  img: string,
  id: string
) => gql`
mutation CreateTeam(name: String!, desc: String!, reqs: [String!]!, id: ID!, img: String!) {
  createTeam(name: ${name}, desc: ${desc}, reqs: ${reqs}, id: ${id}, img: ${img}) {
    desc
    id
    img
    name
    reqs 
  }
}`;
