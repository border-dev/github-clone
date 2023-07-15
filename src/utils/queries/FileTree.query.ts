import { gql } from 'graphql-request';

export const FILE_TREE_QUERY = gql`
  query FileTree(
    $owner: String!
    $name: String!
    $path: String!
    $expression: String!
    $branch: String!
  ) {
    repository(owner: $owner, name: $name) {
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
      tree: object(expression: $expression) {
        ... on Tree {
          entries {
            name
            type
            path
          }
        }
      }
    }
  }
`;
