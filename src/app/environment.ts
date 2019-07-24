
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAUnvnKFfBDEP-DNUnfB9MeWKNG_0BMpU0",
  authDomain: "bookings-a1a95.firebaseapp.com",
  databaseURL: "https://bookings-a1a95.firebaseio.com",
  projectId: "bookings-a1a95",
  storageBucket: "bookings-a1a95.appspot.com",
  messagingSenderId: "394031195272",
  appId: "1:394031195272:web:5833e4d470b081fb"
};

export const snapshotToArray = snapshot => {
  let returnArray = [];

  snapshot.forEach(element => {
  let list = element.val();
  list.key = element.key;
  returnArray.push(list)

  });

  return returnArray;
}
