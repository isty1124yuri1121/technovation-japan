# Lab 3 - Sharing Data Between Screens

This lab focuses on setting up connecting data between screens.

## Instructions

### Creating sample data

When the app loads up, we need to show some fake data.  Open
`storage/Store.tsx` and add some sample farmers and some sample comments.  Copy
and change the farmers and comments we've already added.

### Fetching Comments

Open `screens/ProfileScreen.tsx` and find the first exercise that reads all the comments for the farmer we're looking at.

### Saving Comments

In `screens/ProfileScreen.tsx` find the second exercise near the `Submit`
button.  Update that code to save the new comment instead of printing it to the
console.

### Changing a Farmers Details

Open `screens/FarmerProfileScreen.tsx`.  Find the exercise near the
`updateDetails` method.  Can you update save a farmers information to the React
Redux store? This will look similar to how you saved a comment.

# Prior Setup

This React Native app uses a few core libraries:
  - [Expo](https://docs.expo.dev/) for some general testing and running services
  - [Expo Image Picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)
    for picking images.

Once setup, just start with

```
npm start
```

And connect with your platform of choice.
