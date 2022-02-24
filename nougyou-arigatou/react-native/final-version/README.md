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

## Lesson Points

This demo application aims to cover 6 main lesson points essential to mobile
app development.  While there's many ways to implement each step, we have to
pick one particular solution.  Any student working from this project should
spend extra time investigating alternative approaches and solutions and
learning how to solve these core problems in totally different frameworks.


This demo application covers all 6 of these lesson points.  You can also find
separate versions that provide a starting point for learning and exploring each
lesson point.

### Creating a new screen

Every app needs at least two screens.  The first step in learning any framework
is learning how to make a new screen or view, put some interesting content on
that screen, and then make sure a user can navigate to the screen via some
existing view.

We use React Native's default solutions for creating and navigating between
screens.

### Handling user interactions

Screens are only as interesting as their interactions.  At a minimum, screens
need to support navigation between screens.  But ultimately screens need to
handle user input and more complex gestures.  

We use React Native's default solutions for managing user interactions.

### Sharing data between screens

Once there's more screens and ways to interact with those screens, data will
often need to be shared between views.  One classic example: a user creates a
new TODO item and wants that item to show up in their list of all TODO items.
That item needs to be shared from the TODO writing screen to the view all TODOs
screen.

We use [React Redux](https://react-redux.js.org/) for sharing data between
screens.

### Themes and Component Styling

When you're building an app, you're not only writing some code and making a
functional app.  You also need to communicate a brand image and fit a design
style.  Every button should follow common color and styling patterns.  Every
input box should follow a common set of guidelines.  Theme and Styling makes
that consistent throughout an application.  While developing your brand themes,
you'll need a rapid way to prototype and test how everything looks too.

This part needs to be figured out.

### User Authentication

Nearly every application these days centers around users.  Users wanting to log
in, view their private information.  Users wanting to interact with other
users.  This requires authentication and new user sign up flows.  There's many
solutions but also a few common well tested patterns.   Trying it once makes it
easier for future applications.

This part needs to be figured out or made more robust.

### Working with Cloud Storage

Storing data locally on the app works for a lot of use cases.  But with signed
in users wanting to interact, cloud data storage solutions solve a lot of
problems with very little work.  This will require reading data from the cloud,
sharing that with the appropriate screens along with writing data back to the
cloud when users make updates.

We use React Redux paired with [Airtable](https://airtable.com/).  This is not
the most robust solution but is relatively simple and easy to interact with.
