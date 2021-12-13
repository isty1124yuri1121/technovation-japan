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

### Airtable Setup

Create a new base with two tables.  The two tables should be named and structured as follows:

1.  `Table 1`:
  1.  `Name`: A string
  1.  `Favorites`: A string
  1.  `Image`: An image
  1.  `Location`: A string
  1.  `Username`: A string
1.  `Comments`:
  1.  `Farmer`: A stirng
  1.  `Comment`: A string
  1.  `uuid`: A string

Once setup, find your Airtable API Key and add it to the `.env` file with the
variable `AIRTABLE_API_KEY`.

Lastly, open up the Airtable API documentation and copy the base ID to the environment variable `AIRTABLE_BASE_ID`.
