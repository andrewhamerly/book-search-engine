import { gql } from '@apollo/client';

// Get all users
export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        image
        link
        title
      }
      bookCount
    }
  }
`;

// Get user by ID
export const QUERY_USER = gql`
  query user($id: ID!) {
    user(_id: $id) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        image
        link
        title
      }
      bookCount
    }
  }
`;

// Get logged-in user's data
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        image
        link
        title
      }
      bookCount
    }
  }
`;