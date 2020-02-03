import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

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
      email: String!
      name: String!
      uid: String!
      bookings: [Booking]
      token: String
  }

  type Query {
      getUsers: [User]
      getBookings: [Booking]
      getUser(uid: String!): User
      getBookingsForUser(user_id: String!): [Booking]
  }

  input BookingInput {
      time: String!
      bedrooms: Int
      bathrooms: Int
      type: String
      price: Int
      user_id: String!
  }

  input AuthInput {
      email: String!
      password: String!
      username: String!
  }

  type Mutation {
      addBooking(booking: BookingInput): Booking
      signUp(user: AuthInput): User
      logIn(user:AuthInput): User
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
