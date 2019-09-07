import MainScreen from '../screens/MainScreen.screen';
import RankRules from '../screens/RankRules.screen';

const navigationOptions = {
  header: null,
};

export const routes = {
  MainScreen: {
    screen: MainScreen,
    navigationOptions,
  },
  RankRules: {
    screen: RankRules,
  },
};
