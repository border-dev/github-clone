import { gql } from 'graphql-request';

export const FILE_EXPLORER_QUERY = gql`
  query FileExplorer(
    $owner: String!
    $name: String!
    $expression: String!
    $branch: String!
    $date: GitTimestamp!
  ) {
    repository(owner: $owner, name: $name) {
      branches: refs(refPrefix: "refs/heads/", last: 5) {
        nodes {
          name
        }
      }
      defaultBranchRef {
        target {
          ... on Commit {
            id
            message
            author {
              avatarUrl(size: 10)
              name
            }
            committedDate
            abbreviatedOid
            history {
              totalCount
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
            oid
          }
        }
      }
      ref(qualifiedName: $branch) {
        target {
          ... on Commit {
            history(until: $date) {
              nodes {
                oid
                tree {
                  entries {
                    name
                    oid
                  }
                }
                messageHeadline
                committedDate
              }
            }
          }
        }
      }
    }
  }
`;
