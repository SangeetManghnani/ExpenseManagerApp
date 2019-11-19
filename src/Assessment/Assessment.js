import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  Text,
} from 'react-native';
import themeDefault from '../Utils/Colors';
import globalStyles from '../Utils/GlobalStyles';


const defaultProps = {
    list : [{
      title: 'April',
      totalExpense: '1000',
      limit : 'exceed',
    },
    {
        title: 'April',
        totalExpense: '1000',
        limit : 'exceed',
    },
    {
        title: 'April',
        totalExpense: '1000',
        limit : 'exceed',
    },
    {
        title: 'April',
        totalExpense: '1000',
        limit : 'exceed',
    },
    {
        title: 'April',
        totalExpense: '1000',
        limit : 'exceed',
    },
    {
        title: 'April',
        totalExpense: '1000',
        limit : 'exceed',
    },
    {
        title: 'April',
        totalExpense: '1000',
        limit : 'exceed',
    },
    {
        title: 'April',
        totalExpense: '1000',
        limit : 'exceed',
    },
    {
        title: 'April',
        totalExpense: '1000',
        limit : 'exceed',
    },
    {
        title: 'April',
        totalExpense: '1000',
        limit : 'exceed',
    },
    ]
  }

export default class Assessment extends Component {
    constructor(){
        super();

        this.renderListItems = this.renderListItems.bind(this);
    }
    renderListItems(){
        let listItems = [];
        this.props.list.map((item, index) => {
          listItems.push(
            <View style={styles.listItem} key={index + 1}>
              <View style={styles.listItemDetails}>
                <Text style={[styles.listItemTitle, styles.listItemTextLeft]}>{item.title}</Text>
                <Text>{item.totalExpense}</Text>
              </View>
              <View style={styles.listItemDetails}>
                {item.limit === 'exceed' ? 
                <Text style={[styles.listItemTitle, styles.listItemTextRight, styles.debitText]}>-{item.limit}</Text>
                :  <Text style={[styles.listItemTitle, styles.listItemTextRight,  styles.creditText]}>+{item.limit}</Text>
              }
              </View>
            </View>
          )
        });
        
        return(<ScrollView>{listItems}</ScrollView>);
      }
    render(){
        return(
            <View>
                <View style={styles.rowView}>
                    <Text style={styles.textBold}>Monthly Assessment</Text>
                </View>
                {this.renderListItems()}
            </View>
            // <View style={styles.AssessmentContainer}>
            //     <View>
            //         <Text style={styles.PageHeading}>Monthly Assessment</Text>
            //     </View>
            //     <ScrollView style={styles.EntityCardList}> 
            //         <View style={styles.EntityCardLeft}>
            //             <Text style={globalStyles.textExtraLarge}>February</Text>
            //         </View>
            //         <View style={styles.EntityCardLeft}>
            //             <Text style={globalStyles.textExtraLarge}>February</Text>
            //         </View>
            //         <View style={styles.EntityCardLeft}>
            //             <Text style={globalStyles.textExtraLarge}>February</Text>
            //         </View>
            //         <View style={styles.EntityCardLeft}>
            //             <Text style={globalStyles.textExtraLarge}>February</Text>
            //         </View>
            //         <View style={styles.EntityCardLeft}>
            //             <Text style={globalStyles.textExtraLarge}>February</Text>
            //         </View>
            //         <View style={styles.EntityCardLeft}>
            //             <Text style={globalStyles.textExtraLarge}>February</Text>
            //         </View>
            //         <View style={styles.EntityCardLeft}>
            //             <Text style={globalStyles.textExtraLarge}>February</Text>
            //         </View>
            //         <View style={styles.EntityCardLeft}>
            //             <Text style={globalStyles.textExtraLarge}>February</Text>
            //         </View>
            //         <View style={styles.EntityCardLeft}>
            //             <Text style={globalStyles.textExtraLarge}>February</Text>
            //         </View>
            //     </ScrollView>
            // </View>
        )
    }
}

Assessment.defaultProps = defaultProps;

const styles = StyleSheet.create({
    AssessmentContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    rowView : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 1,
        borderColor: themeDefault.primaryColor4,
      },
      textBold: {
        fontWeight: "bold",
        fontSize: 14,
        flexWrap: "wrap",
        flex: 1,
        textAlign: 'left'
      },
      listItem: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: themeDefault.primaryColor2,
        marginBottom: 20,
        marginLeft:20, 
        marginRight: 20,
        borderRadius: 5,
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
      debitText: {
        color: themeDefault.debitColor,
      },
      creditText: {
        color: themeDefault.creditColor,
      },
   
});