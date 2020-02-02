import admin from './firebase';

export const resolvers = {
    Query: {
        async getUsers() {
            try {
                let allUsers = [];
                let users = await admin
                    .firestore()
                    .collection('users')
                    .get();
                users.forEach(user => allUsers.push(user.data()));
                return allUsers;
            } catch (error) {
                return error;
            }
        },
        async getUser(_root, { id }) {
            try {
                let user = await admin
                    .firestore()
                    .collection('users')
                    .doc(id)
                    .get();
                // console.log(user);
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
                    .collection('bookings')
                    .get();
                bookings.forEach(
                    booking =>
                        console.log(booking.data()) ||
                        allBookings.push(booking.data().booking)
                );
                console.log(allBookings);
                return allBookings;
            } catch (error) {
                return error;
            }
        },
        async getBooking(_root, { id }) {
            try {
                let booking = await admin
                    .firestore()
                    .collection('bookings')
                    .doc(id)
                    .get();
                return booking.data();
            } catch (error) {
                return error;
            }
        },
    },
    Mutation: {
        async addBooking(_root, { booking }) {
            try {
                let _booking = await admin
                    .firestore()
                    .collection('bookings')
                    .doc()
                    .set({ booking });
                return booking;
            } catch (error) {
                return error;
            }
        },
    },
};
