import { gql } from "apollo-boost";

export const GET_USER = gql`
  query getUser($login: String!) {
    user(login: $login) {
      name
      avatarUrl
      bio
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories(first: 100, orderBy: { field: NAME, direction: DESC }) {
        totalCount
        nodes {
          id
          name
          stargazers {
            totalCount
          }

          forkCount
          url
          primaryLanguage {
            name
          }
        }
      }
    }
  }
`;
