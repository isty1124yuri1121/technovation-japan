# Lab 2 - Making Screens Interactive

This lab focuses on making our screens more interactive and dynamic.

## Instructions

### Using Dynamic Lists

Open `components/FarmerList.tsx` and make sure we can display all the farmers
registered for our app.  This will require a `FlatList`.

### Dealing with user comments

Open `screens/ProfileScreen.tsx` and look for the two exercises.  We first want
to save comments while they are being typed.  Second, we want to add a comment
to our list of comments and show them all.

### Saving complex objects.

Open `screens/FarmerProfileScreen.tsx` and look for the one exercise.  Update
the method to correctly save the updated username in the state variable.  Look
at how we handle other input boxes for an idea.

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
