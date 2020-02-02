import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
  type Booking {
      bedrooms: Int
      bathrooms: Int
      type: String
      time: String!
      price: Int
      user_id: String!
  }

  type User {
      id: ID!
      email: String!
      name: String!
      uid: String!
      bookings: [Booking]
  }

  type Query {
      getUsers: [User]
      getBookings: [Booking]
      getUser(id: ID!): User
      getBooking(id: ID!): Booking
  }

  input BookingInput {
      time: String!
      bedrooms: Int
      bathrooms: Int
      type: String
      price: Int
      user_id: String!
  }

  type Mutation {
      addBooking(booking: BookingInput): Booking
  }
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

export default schema;
