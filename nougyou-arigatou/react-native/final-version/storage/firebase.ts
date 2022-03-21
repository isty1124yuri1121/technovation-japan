/**
 * This library connext to Firebase and allows us to authenticate users.
 */
import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Using Cloud Data:
//   - In order to connect with Firebase, we need a firebase account and
//     several API values.  How can we get these?
//   - We don't want anyone else to have our Firebase API values, otherwise
//     they can cost us money and pretend to be us.  We use .env variables.  Can
//     you create a .env file with the right API values?
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Using Cloud Data:
//   Firebase libraries have many different versions.  We use version 9.0.0.
//   How would this look if we used a different version? What would go wrong if
//   we change the firebase version but leave this code the same?
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth = getAuth(app);

// Using Cloud Data:
//   Other components want to access cloud data.  We have to export both the
//   `app` variable and the `auth` variable.
export { app, auth };
