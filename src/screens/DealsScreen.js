import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import ShoppingCartIcon from '../components/ShoppingCartIcon';
import Colors from '../constants/Colors';
function DealsScreen() {
    return (
        <View style={styles.screen}>
            <Text>
                No Deals Screen Record
            </Text>
        </View>
    )
}

DealsScreen.navigationOptions = navData => {
    return {
        headerTitle:()=> (
          <View>
            <Text style={{fontSize:20,
            color:Colors.accentColor,
            fontFamily:'Bitter-ExtraBold'}}>
            Restaurant 
        </Text>
        <Text style={{fontSize:30,
            color:Colors.blackColor,
          fontFamily:'Bitter-SemiBoldItalic'
            }}>
            Coco Cubano
        </Text>
        <Text style={{fontSize:15,
            color:Colors.accentColor,
            fontFamily:'Bitter-ExtraBoldItalic'
            }}>
            Owner
        </Text>
        </View>
        ),
        headerRight:()=> (
       <ShoppingCartIcon />
        )
     // },
      // headerTitle: 'Deals ',
      // headerLeft: ()=>null
      //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
      //     <Item
      //       title="Menu"
      //       iconName="ios-menu"
      //       onPress={() => {
      //         navData.navigation.toggleDrawer();
      //       }}
      //     />
      //   </HeaderButtons>
      // )
    };
  };

const styles=StyleSheet.create({
  screen:{
    flex:1,
    fontSize:20,
    justifyContent:'center',
    paddingLeft:120,
    fontFamily:'open-sans-bold'

}
})

export default DealsScreen
