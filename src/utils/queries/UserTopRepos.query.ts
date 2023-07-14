import { gql } from 'graphql-request';

export const USER_TOP_REPOS_QUERY = gql`
  query UserTopRepos {
    viewer {
      login
      topRepositories(
        first: 7
        orderBy: { field: STARGAZERS, direction: DESC }
      ) {
        nodes {
          id
          name
          description
          owner {
            login
            avatarUrl(size: 10)
          }
          primaryLanguage {
            name
            color
          }
          isPrivate
          stargazerCount
          forkCount
          updatedAt
        }
      }
    }
  }
`;
