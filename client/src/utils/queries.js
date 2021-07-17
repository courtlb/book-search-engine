import { gql } from 'graphql-tag';

export const GET_ME = gql`
    {
        user {
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;