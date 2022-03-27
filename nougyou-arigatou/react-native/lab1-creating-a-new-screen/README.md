# Lab 1 - Creating A New Screen

This lab focuses on adding screens to our app and doing simple navigation.

## Instructions

### Create a new screen component

We want to create a screen that shows a list of farmers.  The `FarmerList`
component in `components/FarmerList.tsx` does most of the hard work for us.  We
just need to create a new file in `screens/` that is a React Component and then
uses the `FarmerList`.  Try making that new component.

### Adding the screen to our navigator

Open `navigation/index.tsx` and look for the two exercises.  We have to first
import our new screen component then list it in the navigator.

### Navigating to the farmer list

Open `screens/InitialScreen.tsx` and look for the one exercise.  Update that
button click handler to go to your new screen using the name you gave it.  This
should look a little like the handler for the `Farmer` button.

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
