import React, {Component} from 'React';
import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';

/**
 * @description The RankRules presents the user the tag of each rank.
 * @author João Paulo
 */
export default class RankRules extends Component {
  render = () => (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.h2}>
          Here you have rules to achieve each trophy rank
        </Text>
        <Text style={styles.info}>
          If the player doesn't fit in any rank, he/she gets 😵.
        </Text>
      </View>
      <ScrollView>
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>Coins</Text>
        </View>
        <View>
          <Text style={styles.sectionItem}>🥉 1 coin </Text>
          <Text style={styles.sectionItem}>🥈 100 coins </Text>
          <Text style={styles.sectionItem}>🥇 1000 coins </Text>
          <Text style={styles.sectionItem}>🎖 10000 coins </Text>
          <Text style={styles.sectionItem}>🏆 100000 coins </Text>
        </View>
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>Deaths</Text>
        </View>
        <View>
          <Text style={styles.sectionItem}>🥉 1 death </Text>
          <Text style={styles.sectionItem}>🥈 10 deaths </Text>
          <Text style={styles.sectionItem}>🥇 25 deaths </Text>
          <Text style={styles.sectionItem}>🎖 50 deaths </Text>
          <Text style={styles.sectionItem}>🏆 100 deaths </Text>
        </View>
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>Dead Monsters</Text>
        </View>
        <View>
          <Text style={styles.sectionItem}>🥉 1 Monster </Text>
          <Text style={styles.sectionItem}>🥈 100 Monsters </Text>
          <Text style={styles.sectionItem}>🥇 1000 Monsters </Text>
          <Text style={styles.sectionItem}>🎖 10000 Monsters </Text>
          <Text style={styles.sectionItem}>🏆 100000 Monsters </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

RankRules.navigationOptions = {
  title: 'Rank Rules',
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    paddingVertical: 25,
  },
  h2: {
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
  },
  info: {
    fontWeight: '300',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  sectionTitleContainer: {
    paddingVertical: 10,
    marginVertical: 3,
    backgroundColor: '#3A3D41',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#FFF',
  },
  sectionItem: {
    fontSize: 14,
    marginVertical: 5,
    marginLeft: 20,
  },
});
