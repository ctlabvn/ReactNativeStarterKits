# ReactNativeStarterKit

Another simple, powerful starter kit for real life project.

## Screen shot

![Home](https://image.prntscr.com/image/CKwG43euR2WniPNF0PaXuQ.png)
![Drawer Menu](https://image.prntscr.com/image/2qPHwuuzTu6jDhhVUJSRXw.png)

## Dependencies

* react-native-vector-icons
* native-base
* agiletech-navigation // build-in
* redux, react-redux, redux-logger, redux-saga, redux-form, redux-persist
* lodash, color, apisauce
* react-native-progress
* react-native-progress-image
* react-native-image-picker
* react-native-splash-screen
* iPhoneX supported

## Folder structure

```
/src
  /assets                project resource files
  /components            All related component
    /Afternteractions       You should not care about this
    /Header
    /Footer
    /Navigator              Navigator
    /SideBar
      options.js            All SideBar items
    /Toast
    /Image                  Custom Image with progress
    /ProgressImage        Progess image build-in
    /Gallery              Gallery
    /Browser              Inapp-browser
  /elements              Dump component without state
  /constants             App constants
  /container             App screens
  /store                 App store/action/reducer/saga/api
    /actions                Actions
    /api                    API
    /reducers               Reducers
    /saga                   Sagas
    /selectors              State selectors
  /theme                 NativeBase theme
  App.js                App root
  routes.js             Router configuration
index.js                Root Component (RN 49+)
```

## Setup project

```
git clone https://gitlab.com/anhtuank7c/ReactNativeStarterKits.git example
cd example && yarn
react-native-rename example -b vn.agiletech.example
yarn ios|android or react-native run-ios|run-android as usual
```

* Remember to change `persist keyPrefix` in `~/store/index.js` line `25`

## npm shortcut

#### Run project

```
yarn android
yarn ios
```

#### Build, Install APK

```
// build apk
yarn ba

// install apk to android after build
yarn ia

// run reverse
yarn adb-reverse
```

## Generate icon and splash screen

We already have **design.sketch** template file

```
// install tool
brew install imagemagick
npm install -g yo generator-rn-toolbox

// generate splash screen images
yo rn-toolbox:assets --icon icon.png --splash splash.png --store
```

* splash.png: square 2048x2048
* icon.png: square 512x512

## Integrate Map

Guide [here](https://github.com/anhtuank7c/maps-example)
