const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");
const { Comment, Category, News, User } = require("../models/index.js");
const { CategoryType, NewsType, CommentType } = require("../types/index.js");
const { name } = require("./queries.js");

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
        name: { type: GraphQLString },
        content: { type: GraphQLString },
      },
      async resolve(_, args) {
        const user = new User({
          name: args.name,
          avatar: 'https://api.dicebear.com/9.x/lorelei/svg?size=64',
          userName: args.name
        });
        await user.save();
        const comment = new Comment({
          news: args.newsId,
          author: user._id,
          content: args.content,
        });
        return comment.save();
      },
    },
  },
});

module.exports = Mutation;
