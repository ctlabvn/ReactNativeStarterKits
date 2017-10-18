# ReactNativeStarterKits

## Note
Đọc kỹ hướng dẫn sử dụng trước khi dùng

## Dependencies
- react-native-vector-icons
- native-base
- agiletech-navigation
- redux, react-redux, redux-logger, redux-saga, redux-form, redux-persist
- react-native-maps
- lodash, color, apisauce
- react-native-fast-image
- react-native-image-picker

## Folder structure

```
~/assets                project resource files
~/components            All related component
  /Afternteractions       You should not care about this
  /Header
  /Footer
  /Navigator
  /SideBar
    options.js            All SideBar items
  /Toast
~/elements              Dump component without state
~/constants             App constants
~/container             App screens
~/store                 App store
  /actions                Actions
  /api                    API
  /reducers               Reducers
  /saga                   Sagas
  /selectors              State selectors
~/theme                 NativeBase theme
~/App.js                Navigation Component
~/routes.js             Router configuration

index.js                Root Component (RN 49+)
```

## API
- Sử dụng `apisauce` để quản lý rest `endpoint`, cấu hình tại `~/constants/configs.js`
- Các path khác chỉ cần gọi như sau: `API.get('post/view', {id: 1'})` hoặc `API.post('user/auth', {username: 'anhtuan', pass: 'abc'})`
- Với các dev dùng máy chạy Windows, bạn cần comment `line 104`, file `android/app/build.gradle`

## mapping root

You simple use `import abc from '~/components/Header';` instead of `import abc from '../../components/Header`;

`~` already mapped to `src` folder

## Setup project

```
git clone https://gitlab.com/anhtuank7c/ReactNativeStarterKits.git example
cd example && yarn
react-native-rename example -b vn.agiletech.example
npm start
Mở thêm 1 cửa sổ lệnh khác và run
react-native run-ios|run-android
```

- Remember to change `persist keyPrefix` in `~/store/index.js` line `25`

## npm shortcut

#### CodePush
Đã tích hợp vài câu lệnh cho code-push vào `package.json`
Cách dùng:

- Các bạn phải tạo ra 2 project code push với lệnh sau

```
code-push app add example-ios ios
code-push app add example-android android
```

- sau đó mở `package.json` ra và sửa lại hết tên project

```
reactnativestarterkits-ios              => example-ios
reactnativestarterkits-android          => example-android
```

- Xem code-push app key

```
npm run keyiOS
npm run keyAndroid
```

- release Optional Staging với chế độ optional => Có nghĩa là user có nút ignore để bỏ qua bản cập nhật này. (Nhớ thay đổi description trong package.json mô tả về bản cập nhật nhé. VD: Nâng cấp tính năng chat realtime)

```
npm run releaseiOS
npm run releaseAndroid
```

- release Mandatory Staging với chế độ optional => Có nghĩa là user bị bắt buộc phải cài bản cập nhật thì mới dùng app tiếp được. (Nhớ thay đổi description trong package.json mô tả về bản cập nhật nhé. VD: Nâng cấp tính năng chat realtime)

```
npm run releaseForceiOS
npm run releaseForceAndroid
```

- Promote release Staging to Production: Khi release app bao giờ cũng trải qua trạng thái Staging (muốn test thì cấu hình multiple release stage). Sau khi test ở trạng thái Staging ok, chúng ta sẽ đẩy bản update này lên Production để sản phẩm cuối cùng được cập nhật hàng loạt. (Chỉ cấu hình production key cho app đưa lên store nhé)

```
npm run promoteiOS
npm run promoteAndroid
```

- Xem bảng thống kê về các bản cập nhật Staging

```
Staging
npm run statisticStagingiOS
npm run statisticStagingAndroid

Production
npm run statisticProiOS
npm run statisticProAndroid
```

- Rollback về bản cập nhật trước đó: Khi lỡ release|promote 1 bản cập nhật tệ hại, chúng ta có thể sửa lỗi bằng cách rollback về bản cập nhật ngay trước đó.

```
Staging
npm run rollbackStagingiOS
npm run rollbackStagingAndroid

Production
npm run rollbackProiOS
npm run rollbackProAndroid
```

## Flow

```
yarn run flow
```


## Generate icon and splash screen

```
// install tool
brew install imagemagick
npm install -g yo generator-rn-toolbox

// generate splash screen images
yo rn-toolbox:assets --icon icon.png --splash splash.png --store
```

- splash.png: square 2048x2048
- icon.png: square 512x512

You may want to follow this module for better UX: https://github.com/crazycodeboy/react-native-splash-screen
