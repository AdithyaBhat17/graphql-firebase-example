import { admin, client } from "./firebase";

export const resolvers = {
  Query: {
    async getUsers() {
      try {
        let allUsers = [];
        let users = await admin
          .firestore()
          .collection("users")
          .get();
        users.forEach(user => allUsers.push(user.data()));
        return allUsers;
      } catch (error) {
        return error;
      }
    },
    async getUser(_root, { uid }) {
      try {
        let user = await admin
          .firestore()
          .collection("users")
          .doc(uid)
          .get();
        return user.data();
      } catch (error) {
        return error;
      }
    },
    async getBookings() {
      try {
        let allBookings = [];
        let bookings = await admin
          .firestore()
          .collection("bookings")
          .get();
        bookings.forEach(
          booking =>
            console.log(booking.data()) || allBookings.push(booking.data())
        );
        console.log(allBookings);
        return allBookings;
      } catch (error) {
        return error;
      }
    },
    async getBookingsForUser(_root, { user_id }) {
      try {
        let bookings = [];
        let data = await admin
          .firestore()
          .collection("bookings")
          .get();
        data.forEach(b => {
          if (b.data().user_id === user_id) {
            bookings.push(b.data());
          }
        });
        return bookings;
      } catch (error) {
        return error;
      }
    }
  },
  Mutation: {
    async addBooking(_root, { booking }) {
      try {
        await admin
          .firestore()
          .collection("bookings")
          .doc()
          .set(booking);
        return booking;
      } catch (error) {
        return error;
      }
    },
    async signUp(_root, { user }) {
      try {
        let userDetails = {};
        let _user = await client
          .auth()
          .createUserWithEmailAndPassword(user.email, user.password);
        userDetails.uid = _user.user.uid;
        userDetails.name = user.username;
        userDetails.email = _user.user.email;
        userDetails.bookings = null;
        await admin
          .firestore()
          .collection("users")
          .doc(userDetails.uid)
          .set(userDetails);
        userDetails.token = await _user.user.getIdToken(true);
        return userDetails;
      } catch (error) {
        return error;
      }
    }
    // @todo add login functionality
  }
};
