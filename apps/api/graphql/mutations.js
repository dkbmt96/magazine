const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");
const { Comment, Category, News } = require("../models/index.js");
const { CategoryType, NewsType, CommentType } = require("../types/index.js");

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createCategory: {
      type: CategoryType,
      args: { name: { type: GraphQLString } },
      resolve(_, args) {
        const category = new Category({ name: args.name });
        return category.save();
      },
    },
    createNews: {
      type: NewsType,
      args: {
        title: { type: GraphQLString },
        content: { type: GraphQLString },
        categoryId: { type: GraphQLID },
        image: { type: GraphQLString },
      },
      resolve(_, args) {
        const news = new News({
          title: args.title,
          content: args.content,
          category: args.categoryId,
        });
        return news.save();
      },
    },
    createComment: {
      type: CommentType,
      args: {
        newsId: { type: GraphQLID },
        author: { type: GraphQLID },
        content: { type: GraphQLString },
      },
      resolve(_, args) {
        const comment = new Comment({
          news: args.newsId,
          author: args.author,
          content: args.content,
        });
        return comment.save();
      },
    },
  },
});

module.exports = Mutation;
