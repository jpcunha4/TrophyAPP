import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// ROUTES
import {routes} from './Routes';

const navigator = createStackNavigator(routes);

export default createAppContainer(navigator);
