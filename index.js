/**
 * @format
 */

import {AppRegistry, Text} from 'react-native';
import {name as appName} from './app.json';
import MainScreen from './src/sceens/MainScreen';

AppRegistry.registerComponent(appName, () => MainScreen);
