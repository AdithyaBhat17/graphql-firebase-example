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
      address: String!
  }

  type User {
      email: String!
      name: String!
      uid: String!
      bookings: [Booking]
      token: String
  }

  type Query {
      users: [User]
      bookings: [Booking]
      user(uid: String!): User
      bookingsForUser(user_id: String!): [Booking]
  }

  input BookingInput {
      time: String!
      bedrooms: Int
      bathrooms: Int
      type: String
      price: Int
      user_id: String!
      address: String!
      token: String!
      uid: String!
  }

  input AuthInput {
      email: String!
      password: String!
      username: String
  }

  type Mutation {
      addBooking(booking: BookingInput): Booking
      signUp(user: AuthInput): User
      loginUser(user:AuthInput): User
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
