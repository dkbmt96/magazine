import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      name
      background
    }
  }
`;

export const GET_NEWS = gql`
  query GetNews {
    news {
      id
      title
      content
      createdAt
      image
      comments {
        id
        author {
          id
          name
        }
        content
      }
    }
  }
`;

export const GET_NEWS_BY_ID = gql`
  query GetNewsById($id: ID!) {
    newsById(id:$id) {
      id
      title
      content
      createdAt
      image
      comments {
        id
        content
        author {
          name
          avatar
        }
      }
      category {
        name
      }
    }
  }
`;

export const GET_TRANDINGS = gql`
  query GetNewsTrending($limit: Int, $sortBy: String, $order: String) {
    newsTrending(limit:$limit, sortBy: $sortBy, order:$order) {
      id
      title
      createdAt
      image
      category {
        name
      }
    }
  }
`;
