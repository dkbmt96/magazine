const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} = require("graphql");
const { Comment, Category, News, Tag, User } = require("../models");

const CategoryType = new GraphQLObjectType({
  name: "Category",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    background: { type: GraphQLString },
    news: {
      type: new GraphQLList(NewsType),
      resolve(parent) {
        return News.find({ category: parent.id });
      },
    },
  }),
});

const TagType = new GraphQLObjectType({
  name: "Tag",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  }),
});

const NewsType = new GraphQLObjectType({
  name: "News",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    image: { type: GraphQLString },
    category: {
      type: CategoryType,
      resolve(parent) {
        return Category.findById(parent.category);
      },
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve(parent) {
        return Comment.find({ news: parent.id }).populate("author");
      },
    },
    tags: {
      type: new GraphQLList(TagType),
      resolve(parent) {
        return Tag.find({ _id: parent.tags });
      },
    },
    thumbnail: { type: GraphQLString },
  }),
});

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    userName: { type: GraphQLString },
    avatar: { type: GraphQLString },
  }),
});

const CommentType = new GraphQLObjectType({
  name: "Comment",
  fields: () => ({
    id: { type: GraphQLID },
    author: { type: UserType },
    content: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    news: {
      type: NewsType,
      resolve(parent) {
        return News.findById(parent.news);
      },
    },
    replies: { type: new GraphQLList(CommentType) },
  }),
});

module.exports = { CategoryType, NewsType, CommentType, TagType };
