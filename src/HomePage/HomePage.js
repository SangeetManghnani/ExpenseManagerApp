import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Button,
  Alert,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import themeDefault from '../Utils/Colors';

const defaultProps = {
  recents : [{
    title: 'Rent Payment',
    mode: 'Net Banking',
    amount: '1000',
    dated : 'Apr 30',
    type: 'debit'
  },{
    title: 'Grocery Shopping',
    mode: 'Cash',
    amount: '600',
    dated : 'May 4',
    type: 'debit'
  },{
    title: 'Dues from Sangeet',
    mode: 'Net Banking',
    amount: '1000',
    dated : 'Apr 30',
    type: 'credit'
  },{
    title: 'Cab to Office',
    mode: 'Ola Money',
    amount: '120',
    dated : 'May 14',
    type: 'debit'
  },{
    title: 'Amazon Grocery',
    mode: 'Net Banking',
    amount: '550',
    dated : 'May 16',
    type: 'debit'
  },{
    title: 'Petrol Refill',
    mode: 'Card Payment',
    amount: '1000',
    dated : 'May 14',
    type: 'debit'
  }]
}
export default class HomePage extends Component {
  constructor(){
    super();
    
    this.showAlert = this.showAlert.bind(this);
  }
  showAlert(){
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
  renderListItems(){
    let listItems = [];
    this.props.recents.map((item, index) => {
      listItems.push(
        <View style={styles.listItem} key={index + 1}>
          <View
            style={{
                borderWidth:1,
                borderColor:'rgba(0,0,0,0.2)',
                alignItems:'center',
                justifyContent:'center',
                width:40,
                height:40,
                backgroundColor:'#fff',
                borderRadius:100,
                marginRight: 10,
              }}
          >
            <Image style={styles.itemImage} source={require("../assets/images/bank.png")} />
          </View>
          <View style={styles.listItemDetails}>
            <Text style={[styles.listItemTitle, styles.listItemTextLeft]}>{item.title}</Text>
            <Text>{item.type}</Text>
          </View>
          <View style={styles.listItemDetails}>
            {item.type === 'debit' ? 
            <Text style={[styles.listItemTitle, styles.listItemTextRight, styles.debitText]}>-{item.amount}</Text>
            :  <Text style={[styles.listItemTitle, styles.listItemTextRight,  styles.creditText]}>+{item.amount}</Text>
            }
            <Text style={styles.listItemTextRight}>{item.dated}</Text>
          </View>
        </View>
      )
    });

    return(<ScrollView>{listItems}</ScrollView>);
  }
  render() {
    return (
      <View style={styles.HomeContainer}>
        <LinearGradient colors={[themeDefault.primaryColor2, themeDefault.primaryColor4]} style={styles.navBar}>
          <View style={styles.topBar}>
            <Text style={styles.navTitle}>Summary</Text>
          </View>
        </LinearGradient>
        <View style={styles.rowView}>
          <Text style={styles.textBold}>Latest Transaction</Text>
          <Text style={styles.viewAllButton} onPress={this.showAlert}>View All</Text>
        </View>
        {this.renderListItems()}
      </View>
    );
  }
}

HomePage.defaultProps = defaultProps;

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  navBar: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 0.7,
  },
  rowView : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: themeDefault.primaryColor4,
  },
  listContainer: {
    flex: 2,
  },
  viewAllButton: {
    color: themeDefault.primaryColor2,
    fontSize: 12,
    flexWrap: "wrap",
    fontWeight: "bold",
    flex: 1,
    textAlign: 'right'
  },  
  listItem: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  listItemDetails: {
    flex: 0.5,
  },
  listItemTextLeft: {
    textAlign: 'left',
  },
  listItemTitle: {
    color: themeDefault.primaryColor2,
    fontSize: 14,
    fontWeight: "bold",
  },
  listItemTextRight: {
    textAlign: 'right',
  },
  navTitle: {
    color: 'white', // changing navbar title color
    fontWeight: 'bold',
    flexWrap: "wrap",
    flex: 1,
    fontSize: 20,
    textAlign: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  debitText: {
    color: themeDefault.debitColor,
  },
  creditText: {
    color: themeDefault.creditColor,
  },
  itemImage: {
      width: 40,
      height: 40,
  },
  textBold: {
    fontWeight: "bold",
    fontSize: 14,
    flexWrap: "wrap",
    flex: 1,
    textAlign: 'left'
  },
  topBar:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
  }
});
