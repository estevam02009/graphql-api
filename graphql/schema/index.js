const { buildSchema } = require('graphql')

module.exports = buildSchema(`

    type Article {
        _id: ID!
        title: String!
        craetedAt: String!
    }

    input ArticleInput {
        title: String!
        body: String!
    }

    type Query {
        articles:[Article!]
    }

    type Mutation {
        createArticle(article:ArticleInput): Article
    }

    Schema {
        query: Query
        mutation: Mutation
    }
`)