# Lab 6 - Using Cloud Data

This lab focuses on connecting our React Native app to Cloud storage.  We've
already setup all prior steps.

## Instructions

### Register on Airtable and copy our demo base

1. Copy our [Farmer Table](https://airtable.com/shrhC1iN5AqDoIMBO).
1. Copy our [Comments Table](https://airtable.com/shrhC1iN5AqDoIMBO).

### Update your .env with Airtable API values

Update the `.env` file with Airtable's API Key and the Base ID.

### Read from Airtable

Finish the exercise in `storage/Store.tsx`

### Write data to Airtable

1. Finish the exercises in `storage/farmerSlice.tsx`
1. Finish the exercises in `storage/commentSlice.tsx`

# Prior Setup

This React Native app uses a few core libraries:
  - [Expo](https://docs.expo.dev/) for some general testing and running services
  - [Firebase](https://docs.expo.dev/guides/using-firebase/?redirected) for
    saving data to firebase.
  - [Expo Image Picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)
    for picking images.

To get this setup, you have to do a few steps documented below.

Once setup, just start with

```
npm start
```

And connect with your platform of choice.

### Firebase Setup

First, follow
[Expo's Firebase guide](https://docs.expo.dev/versions/latest/sdk/imagepicker/)
to get setup.  Then, create an app which should provide some configuration code
in Javascript.

Copy the key fields in the config to a `.env` file with the following fields:
-  `FIREBASE_API_KEY`
-  `FIREBASE_AUTH_DOMAIN`
-  `FIREBASE_DATABASE_URL`
-  `FIREBASE_PROJECT_ID`
-  `FIREBASE_STORAGE_BUCKET`
-  `FIREBASE_SENDER_ID`
-  `FIREBASE_APP_ID`
-  `FIREBASE_MEASUREMENT_ID`
