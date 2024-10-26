const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLInt, GraphQLString } = require("graphql");
const { Comment, Category, News } = require("../models/index.js");
const { CategoryType, NewsType, CommentType } = require("../types/index.js");

// Define the Root Query
const RootQuery = new GraphQLObjectType({
  name: "Queries",
  fields: {
    categories: {
      type: new GraphQLList(CategoryType),
      resolve() {
        return Category.find();
      },
    },
    news: {
      type: new GraphQLList(NewsType),
      resolve() {
        return News.find();
      },
    },
    newsById: {
      type: NewsType,
      args: { id: { type: GraphQLID } },
      resolve(_, args) {
        return News.findById(args.id);
      },
    },
    newsByCategory: {
      type: new GraphQLList(NewsType),
      args: { 
        categoryId: { type: GraphQLID },
        limit: { type: GraphQLInt },
        offset: { type: GraphQLInt },
        sortBy: { type: GraphQLString },
        order: { type: GraphQLString }, // 'asc' or 'desc'
      },
      async resolve(_, { categoryId, limit, offset, sortBy, order }) {
        // Determine the sort order
        const sortOrder = order === 'desc' ? -1 : 1;
        const news = await News.find({ category: categoryId })
          .sort({ [sortBy]: sortOrder }) // Sort based on the field and order
          .skip(offset) // Skip for pagination
          .limit(limit); // Limit for pagination
        return news;
      },
    },
    newsTrending: {
      type: new GraphQLList(NewsType),
      args: {
        limit: { type: GraphQLInt },
        offset: { type: GraphQLInt },
        sortBy: { type: GraphQLString },
        order: { type: GraphQLString }, // 'asc' or 'desc'
      },
      async resolve(_, { limit, offset, sortBy, order }) {
        // Determine the sort order
        const sortOrder = order === 'desc' ? -1 : 1;
        const os = offset || 0;
        const news = await News.find()
          .sort({ [sortBy]: sortOrder }) // Sort based on the field and order
          .skip(os) // Skip for pagination
          .limit(limit); // Limit for pagination
        
        return news;
      },
    },
    comments: {
      type: new GraphQLList(CommentType),
      args: { newsId: { type: GraphQLID } },
      resolve(_, args) {
        return Comment.find({ news: args.newsId }).populate('author').populate('replies');
      },
    },
  },
});

module.exports = RootQuery