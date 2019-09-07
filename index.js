import {AppRegistry} from 'react-native';
import NavigationManager from './src/navigators/NavigationManager';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => NavigationManager);
