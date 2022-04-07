Cài reactotron

`npm i --save-dev reactotron-react-native`

tạo file `ReactotronConfig.js` ở ngoài cùng

và copy content bên dưới vào:

```
import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reactotron = Reactotron
  .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure() // controls connection & communication settings
  // .configure({ host: '192.168.1.3' }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect() // let's connect!

export default reactotron
console.tron = reactotron
```

vứt `import './ReactotronConfig'` vào index.js

thêm dòng này `"tron": "adb reverse tcp:9090 tcp:9090"` vào script của package.json

Cách dùng: console.tron.log('noi dung log')

Notice: Mỗi lần chạy project cần phải chạy `npm run tron` sau khi chạy `react-native run-android`


https://fbflipper.com/docs/features/react-native/