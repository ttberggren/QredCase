# Qred case

Repository belonging to Thomas Berggren

## Description

This app is built in Expo for easy and quick implementations

## Issues

Ignore the logs complaining about that an invalid API key is being used, it belongs to my attempt to get an actual image reader working. Started working with the Google Cloud Vision API but realized that it would take too long to implement but I still wanted to keep the code so that you'll what kind of progress I was making atleast.

The following error occurs a lot and it's because i'm using Babel to don't have to do imports lite `import x from '../../components/folder` and just do `import x from components/folder`. It's working but for whatever reason it throws an error.
[![Screenshot-2023-03-12-at-20-26-53.png](https://i.postimg.cc/q70cFNYr/Screenshot-2023-03-12-at-20-26-53.png)](https://postimg.cc/21cBbSr9)

Some type errors regarding navigation that didn't make the time plan.

## Getting Started

### Dependencies

Start by cloning

```
git clone git@github.com:ttlenell/QredCase.git
```

Expo

Installing the expo CLI is mandatory to be able to run the project.

```
npm i -g expo-cli
```

Expo Go is okay for this project since we aren't changing any native folders (iOS/android).

The guides below will help you install a simulator for iOS and an emulator for Android.

```
iOS: https://docs.expo.dev/workflow/ios-simulator/
```

```
Android: https://docs.expo.dev/workflow/android-studio-emulator/
```

### Installing

After cloning the project, you need to:

Run yarn to install all dependencies

```
yarn
```

### Executing the app

The metro server (React Native server that works with a file watcher called watchman. Basically it checks for file changes to enable hot reload when saving a code change in VS code for example) will start at when running the commands below.

To run iOS

```
npx expo start
```

And press the letter "i" on your keyboard when the server is started

To run Android
Press the letter "a" on your keyboard when the server is started
