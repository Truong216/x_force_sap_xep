import { StatusBar } from 'expo-status-bar'
import React from 'react';
import { StyleSheet, Text, View,  ScrollView, Image, Dimensions  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from 'react-native-vector-icons';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { FontAwesome5 } from 'react-native-vector-icons';
import { FontAwesome } from 'react-native-vector-icons';
import { Color } from './Color'; 

const WIDTH = Dimensions.get('window').width;
console.log(WIDTH);
const HEIGHT = Dimensions.get('window').height;

export default function DetailsScreen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.menu_chose}>
          <View style={styles.menu_chose_first}> 
            <View style={{flexDirection: 'row', alignItems: "center"}}>
              <MaterialCommunityIcons name="sort-descending" size={24} color={Color.primary} />
              <Text style={{fontSize: 14, paddingLeft: 3}}>Sắp xếp</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: "center", marginLeft: 10}}>
              <MaterialCommunityIcons name="sort-descending" size={24} color={Color.primary} />
              <Text style={{fontSize: 14, paddingLeft:3}}>Bộ lọc</Text>
            </View>
          </View>
          <View style={styles.menu_chose_second}>
            <View style={styles.menu_chose_second_icon}>
              <FontAwesome5 name="th-list" size={20} color={Color.primary} style={{backgroundColor: 'grey', padding: '10%'}}/>
              <MaterialCommunityIcons name="map-marker-radius" size={20} color={Color.primary} style={{ padding: '10%'}}/>
            </View>
          </View>
        </View>
        <View style={styles.flatList}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.card}>
            <View style={styles.card_Img}>
              <Image style={styles.Image} source={require('../assets/Hotel1.jpg')}/>
              <View style={styles.card_heart}>
                <AntDesign name="hearto" size={14} color={Color.primary} style={{padding: 10}}/>
              </View>
            </View>
             <View style={styles.card_Info}>
              <View style={styles.card_row_1}>
                <View>
                  <Text numberOfLines= {2} style={{fontSize: 14, fontWeight: "bold", color: '#111',  textAlign: 'left', marginLeft: 10}}>Cozrum Homes Trương Định lalaadfàdfd ad adf adfa àdđlanlesterd richhhghghg</Text>
                  <Text numberOfLines= {2} style={{fontSize: 11, color: 'grey', marginLeft: 10}}>73 Trương Định, Quận 3, Hồ Chí Minh lalaadfàdfd ad adf adfa àdđlanlesterd richhhghghg</Text>
                </View>
                <View style={{flexDirection: 'row', marginLeft: 10}}>
                  <FontAwesome name="star" size={13} color={Color.primary} style={{paddingRight: 1}}/>
                  <FontAwesome name="star" size={13} color={Color.primary} style={{paddingRight: 1}}/>
                  <FontAwesome name="star" size={13} color={Color.primary} style={{paddingRight: 1}}/>    
                  <FontAwesome name="star-o" size={13} color={Color.primary} style={{paddingRight: 1}}/>
                  <FontAwesome name="star-o" size={13} color={Color.primary} style={{paddingRight: 1}}/>    
                  <Text style={{color:'white', marginLeft: 7, fontSize: 12,paddingLeft: 5,paddingRight: 5, borderColor: 'black',backgroundColor: Color.primary}}>9.0</Text>
                </View>
              </View>
              <View style={styles.card_row_2}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>435.000 đ</Text>
                <Text style={{}}>/Đêm</Text>
              </View>
            </View> 
          </View> 
        </ScrollView>
        </View>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu_chose:{
    flex: 0.078,
    backgroundColor: "#fff",
    flexDirection: 'row',
    marginTop: -19,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  menu_chose_first: {
    flex: 0.5,
    justifyContent: "space-around",
    flexDirection: "row",
    marginLeft: 10,
  },
  menu_chose_second:{
    flex: 0.5,
    flexDirection: "row-reverse",
    height: 35,
    paddingLeft: 20,
  },
  menu_chose_second_icon: {
    flexDirection: 'row',
    alignItems: "center",
    borderColor: 'grey',
    borderWidth: 1,
    width: 73,
    justifyContent: "space-between",
  },
  flatList: {
    flex: 0.922,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  scrollView: {
    paddingRight: 10,
    paddingTop: 10
  },
  card: {
    flex: 1,
    width: WIDTH*(9/10),
    height: WIDTH*(9/10)*(24/35),
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 12,
    marginRight: 5,
    marginLeft: 15,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card_Img: {
    flex: 0.65,
  },
  Image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  card_Info: {
    flex: 0.35,
    flexDirection: 'row',
    justifyContent: "space-around"
  },
  card_row_1: {
    flex: 0.65,
    justifyContent: 'space-around',
  },
  card_row_2: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  card_row_3: {
    flex: 0.25,
  },
  card_title: {
    flex: 0.80,
    paddingLeft: 10,
    flexDirection: "row",
    paddingTop: 7,
    alignItems: "center",
    flexWrap: 'wrap',
    position: "relative",
  },
  card_heart: {
    position: 'absolute',
    right: 15,
    top: 15,
    backgroundColor: '#fff',
    borderRadius: 90,
    justifyContent: "center",
    alignItems: "center"
  },
  backButton_custom: {
    color: 'pink',
  }
});
