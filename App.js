/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import HomePage from './src/HomePage/HomePage';
import Assessment from './src/Assessment/Assessment';
import BottomNavigation, {
  IconTab,
  Badge
} from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import themeDefault from './src/Utils/Colors';



type Props = {};
export default class App extends Component<Props> {
  constructor(){
    super();
    this.state = {
      activeTab: 'summary',
      tabs:[{
        key: 'summary',
        icon: 'account-balance-wallet',
        label: 'Summary',
        barColor: '#fff',
        pressColor: themeDefault.primaryColor3
      },
      {
        key: 'categories',
        icon: 'assessment',
        label: 'Categories',
        barColor: '#fff',
        pressColor: themeDefault.primaryColor3
      },
      {
        key: 'assessment',
        icon: 'date-range',
        label: 'Assessment',
        barColor:'#fff',
        pressColor: themeDefault.primaryColor3
      }]
    }

    this.renderTab = this.renderTab.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
    this.renderPages = this.renderPages.bind(this);
  }
  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color={themeDefault.primaryColor2} name={icon} />
  )
  renderTab = ({ tab, isActive }) => (
    <IconTab
    isActive={isActive}
    showBadge={tab.key === 'movies-tv'}
    renderBadge={() => <Badge>2</Badge>}
    key={tab.key}
    label={tab.label}
    renderIcon={this.renderIcon(tab.icon)}
  />
  );

  renderPages = () => {
    switch (this.state.activeTab) {
      case 'summary': 
          return(<HomePage />);
        break;
      case 'categories': 
          return(<HomePage />);
        break;
      case 'assessment':
          return(<Assessment />);
        break;
    
      default: return(<HomePage />);
        break;
    }
  }
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
          backgroundColor="#720479"
          barStyle="light-content"
        />
        {this.renderPages()}
        <BottomNavigation
          tabs={this.state.tabs}
          activeTab={this.state.activeTab}
          onTabPress={newTab => this.setState({ activeTab: newTab.key })}
          renderTab={this.renderTab}
          useLayoutAnimation
          style={styles.bottomBarStyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  bottomBarStyle: {
    position: 'absolute', 
    bottom: 0,
  }
});
