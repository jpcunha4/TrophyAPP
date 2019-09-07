import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
// Service
import api from '../service/Api.service';

/**
 * @description The MainScreen presents the user a complete view of each player's status and rank information.
 * @author João Paulo
 */
export default class MainScreen extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
    };
  }

  componentDidMount = () => {
    this.fetchUsers();
  };

  /**
   * @description Fetch all user from the API.
   */
  fetchUsers = async () => {
    try {
      const users = await api.fetchAllUsers();

      console.warn(users);

      this.setState({
        users: users.data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  /**
   * @description Redirects the user to the RankRules screen.
   */
  goToRankRulesScreen = () => {
    const {navigate} = this.props.navigation;

    navigate('RankRules');
  };

  /**
   * @description Defines the throphy emoji from a rank.
   */
  getTrophy = rank => {
    switch (rank) {
      case 1:
        return '🥉';
      case 2:
        return '🥈';
      case 3:
        return '🥇';
      case 4:
        return '🎖';
      case 5:
        return '🏆';
      default:
        return '😵';
    }
  };

  /**
   * @description Renders the flatlist item with the player's info.
   */
  renderListItem = ({item}) => (
    <View style={styles.cellContainer}>
      <Text>{item.name}</Text>
      <Text>
        {item.collectedCoins.amount} coin(s){' '}
        {this.getTrophy(item.collectedCoins.trophy)}
      </Text>
      <Text>
        {item.deaths.amount} death(s) {this.getTrophy(item.deaths.trophy)}
      </Text>
      {item.killedMonsters.length ? (
        item.killedMonsters.map(monster => (
          <Text>
            {monster.name} killed {monster.amount} time(s){' '}
            {this.getTrophy(monster.trophy)}
          </Text>
        ))
      ) : (
        <Text>0 Killed monsters {this.getTrophy(0)}</Text>
      )}
    </View>
  );

  render = () => {
    const {users} = this.state;

    return (
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.h1}>Welcome to the trophy app.</Text>
          <Text style={styles.h2}>
            Here you will see all players' achievements.
          </Text>
          <TouchableOpacity onPress={this.goToRankRulesScreen}>
            <Text style={styles.button}>RANK RULES</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={users}
          keyExtractor={(_, index) => `${index}`}
          renderItem={this.renderListItem}
        />
      </SafeAreaView>
    );
  };
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    paddingVertical: 25,
  },
  h1: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  h2: {
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
  },
  button: {
    color: '#4688F1',
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
    marginTop: 15,
  },
  cellContainer: {
    marginLeft: 15,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#000',
  },
});
