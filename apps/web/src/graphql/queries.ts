import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      name
      background
      news {
        id
        title
        content
        createdAt
        image
        category {
          name
        }
      }
    }
  }
`;

export const GET_NEWS_BY_CATEGORIES = gql`
  query GetNewsByCatId($catId: ID, $count: Int) {
    newsByCategory(categoryId:$catId, limit:$count) {
      id
      title
      content
      createdAt
      image
      category {
        name
      }
      tags {
        id
        name
      }
      thumbnail
    }
  }
`

export const GET_NEWS = gql`
  query GetNews {
    news {
      id
      title
      content
      createdAt
      image
      category {
        name
      }
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

export const GET_RECENT_NEWS = gql`
  query GetRecentNews {
    newsTrending(limit: 10, sortBy: "createdAt", order: "desc") {
      id
      title
      content
      createdAt
      image
      category {
        name
      }
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

export const CREATE_COMMENT = gql`
  mutation CreateComment($newsId: ID, $name: String, $content: String) {
    createComment(newsId:$newsId, name:$name, content:$content) {
      id
      content
      author {
        name
        avatar
      }
    }
  }
`;
