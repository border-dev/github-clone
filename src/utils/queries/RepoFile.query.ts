import { gql } from 'graphql-request';

export const REPO_FILE_QUERY = gql`
  query RepoFile(
    $owner: String!
    $name: String!
    $path: String!
    $expression: String!
    $branch: String!
  ) {
    repository(owner: $owner, name: $name) {
      blob: object(expression: $expression) {
        ... on Blob {
          byteSize
          text
        }
      }
      ref(qualifiedName: $branch) {
        target {
          ... on Commit {
            history(path: $path, first: 1) {
              nodes {
                author {
                  avatarUrl(size: 40)
                  user {
                    login
                  }
                }
                messageHeadline
                abbreviatedOid
                committedDate
              }
            }
          }
        }
      }
    }
  }
`;
