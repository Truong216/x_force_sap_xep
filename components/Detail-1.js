import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View,  ScrollView, Image, Dimensions, ActionSheetIOS } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from 'react-native-vector-icons';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { FontAwesome5 } from 'react-native-vector-icons';
import { FontAwesome } from 'react-native-vector-icons';
import { Feather } from '@expo/vector-icons';
import  Color  from './Color'; 
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function DetailsScreen({ navigation }) {
  const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
  const multiSliderValuesChange = (values) => setMultiSliderValue(values)
  const [priceValue, setPriceValue] = useState([0, 50])
  const PriceValuesChange = (values) => setPriceValue(values)
  const actioon = () =>
  ActionSheetIOS.showActionSheetWithOptions(
    {
      options: ["Bỏ qua", "Mặc Định", "Theo giá tăng dần", "Theo giá giảm dần"],
      cancelButtonIndex: 0, 
      title : 'Tiêu chí sắp xếp giá',
      tintColor: Color.primary
    },
    buttonIndex => {
      if (buttonIndex === 0) {
        // cancel action
      } else if (buttonIndex === 1) {
        console.log(1)
      } else if (buttonIndex === 2) {
        console.log(2)
      }
    }
  );

  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'grey',
        height: 550,
      }}
    >
      <View style={styles.BottomSheet_tittle}>
        <MaterialCommunityIcons name="reload" size={24} color={Color.primary} />
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Bộ Lọc</Text>
        <TouchableWithoutFeedback onPress={() => sheetRef.current.snapTo(1)}>
          <Feather name="x" size={24} color={Color.primary} />
        </TouchableWithoutFeedback>
      </View>
      <ScrollView style={{flex: 0.68}}>
        <View style={styles.BottomSheet_price}>
          <View style={styles.Bottom_warp}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Giá mỗi đêm</Text>
            <View style={{justifyContent: "center", alignItems: 'center'}}>
            <MultiSlider
          markerStyle={{
            ...Platform.select({
              ios: {
                height: 20,
                width: 20,
                shadowColor: '#000000',
                shadowOffset: {
                  width: 0,
                  height: 3
                },
                shadowRadius: 1,
                shadowOpacity: 0.1
              },
              android: {
                height: 30,
                width: 30,
                borderRadius: 50,
                backgroundColor: Color.primary
              }
            })
          }}
          pressedMarkerStyle={{
            ...Platform.select({
              android: {
                height: 30,
                width: 30,
                borderRadius: 20,
                backgroundColor: '#148ADC'
              }
            })
          }}
          selectedStyle={{
            backgroundColor: Color.primary
          }}
          trackStyle={{
            backgroundColor: '#CECECE'
          }}
          touchDimensions={{
            height: 30,
            width: 30,
            borderRadius: 20,
            slipDisplacement: 40
          }}
          values={[priceValue[0], priceValue[1]]}
          sliderLength={WIDTH/1.2}
          onValuesChange={PriceValuesChange}
          min={0}
          max={50}
          allowOverlap={false}
          minMarkerOverlapDistance={1}
        />
        </View>
        <View  style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
          <Text style={{fontSize: 13}}>{(priceValue[0]*100000).toLocaleString('en-US')} đ</Text>
          <Text style={{fontSize: 13}}>{(priceValue[1]*100000).toLocaleString('en-US')} đ+</Text>
        </View>
          </View>
        </View>
        <View style={styles.BottomSheet_star}>
          <View style={styles.Bottom_warp}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Hạng khách sạn</Text>
            <View style={{ height: HEIGHT/9, marginTop: 10, justifyContent: "space-around"}}>
            <View style={{flexDirection: 'row', width: WIDTH/1.9, justifyContent: 'space-between'}}>
                  <FontAwesome name="star" size={13} color={'grey'} style={{paddingHorizontal: 15, paddingVertical: 7,  borderColor: 'grey', borderWidth: 1, borderRadius: 5}}/>
                  <View style={styles.star_ratting}>
                    <FontAwesome name="star" size={13} color={'grey'} style={{paddingRight: 1}}/> 
                    <FontAwesome name="star" size={13} color={'grey'} style={{paddingRight: 1}}/> 
                  </View>
                  <View style={styles.star_ratting}>
                    <FontAwesome name="star" size={13} color={'grey'} style={{paddingRight: 1}}/> 
                    <FontAwesome name="star" size={13} color={'grey'} style={{paddingRight: 1}}/> 
                    <FontAwesome name="star" size={13} color={'grey'} style={{paddingRight: 1}}/> 
                  </View>
            </View>
            <View style={{flexDirection: 'row', width: WIDTH/1.9, justifyContent: 'space-between'}}>
              <View style={styles.star_ratting}>
                <FontAwesome name="star" size={13} color={'grey'} style={{paddingRight: 1}}/> 
                <FontAwesome name="star" size={13} color={'grey'} style={{paddingRight: 1}}/> 
                <FontAwesome name="star" size={13} color={'grey'} style={{paddingRight: 1}}/> 
                <FontAwesome name="star" size={13} color={'grey'} style={{paddingRight: 1}}/> 
              </View>
              <View style={styles.star_ratting}>
                <FontAwesome name="star" size={13} color={'grey'} style={{paddingRight: 1}}/> 
                <FontAwesome name="star" size={13} color={'grey'} style={{paddingRight: 1}}/> 
                <FontAwesome name="star" size={13} color={'grey'} style={{paddingRight: 1}}/> 
                <FontAwesome name="star" size={13} color={'grey'} style={{paddingRight: 1}}/> 
                <FontAwesome name="star" size={13} color={'grey'} style={{paddingRight: 1}}/> 
              </View>
            </View>
            </View>
          </View>  
        </View>
        <View style={styles.BottomSheet_rating}>
          <View style={styles.Bottom_warp}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Đánh giá</Text>
            <View style={{justifyContent: "center", alignItems: 'center'}}>
            <MultiSlider
          markerStyle={{
            ...Platform.select({
              ios: {
                height: 20,
                width: 20,
                shadowColor: '#000000',
                shadowOffset: {
                  width: 0,
                  height: 3
                },
                shadowRadius: 1,
                shadowOpacity: 0.1
              },
              android: {
                height: 30,
                width: 30,
                borderRadius: 50,
                backgroundColor: Color.primary
              }
            })
          }}
          pressedMarkerStyle={{
            ...Platform.select({
              android: {
                height: 30,
                width: 30,
                borderRadius: 20,
                backgroundColor: '#148ADC'
              }
            })
          }}
          selectedStyle={{
            backgroundColor: Color.primary
          }}
          trackStyle={{
            backgroundColor: '#CECECE'
          }}
          touchDimensions={{
            height: 30,
            width: 30,
            borderRadius: 20,
            slipDisplacement: 40
          }}
          values={[multiSliderValue[0], multiSliderValue[1]]}
          sliderLength={WIDTH/1.2}
          onValuesChange={multiSliderValuesChange}
          min={0}
          max={100}
          allowOverlap={false}
          minMarkerOverlapDistance={10}
        />
        </View>
        <View  style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
          <Text style={{fontSize: 13}}>{(multiSliderValue[0]/10).toFixed(1)}</Text>
          <Text style={{fontSize: 13}}>{(multiSliderValue[1]/10).toFixed(1)}</Text>
        </View>
          </View>  
        </View>
        <View style={styles.BottomSheet_Kieu}>
          <View style={styles.Bottom_warp}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Kiểu</Text>
            <View style={{ height: HEIGHT/9, marginTop: 10, justifyContent: "space-between"}}>
              <View style={{flexDirection: 'row', width: WIDTH/1.5, justifyContent: 'space-between'}}>
                  <View style={styles.star_ratting}>
                    <Text style={{fontSize: 12}}>Khách Sạn</Text>
                  </View>
                  <View style={styles.star_ratting}>
                    <Text style={{fontSize: 12}}>Resort</Text>
                  </View>
                  <View style={styles.star_ratting}>
                    <Text style={{fontSize: 12}}>Nhà trọ</Text>
                  </View>
              </View>
              <View style={{flexDirection: 'row', width: WIDTH/1.9, justifyContent: 'space-between'}}>
                  <View style={styles.star_ratting}>
                    <Text style={{fontSize: 12}}>Căn hộ/Villa</Text>
                  </View>
                  <View style={styles.star_ratting}>
                    <Text style={{fontSize: 12}}>Du thuyền</Text>
                  </View>
              </View>
            </View>
          </View>  
        </View>
        <View style={styles.BottomSheet_tien_ich}>
          <View style={styles.Bottom_warp}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Tiện ích sẵn có</Text>
            <View style={{ height: HEIGHT/5, marginTop: 10, justifyContent: "space-around"}}>
              <View style={{flexDirection: 'row', width: WIDTH/1.42, justifyContent: 'space-between'}}>
                  <View style={styles.star_ratting}>
                    <Text style={{fontSize: 12}}>Bể bơi ngoài trời</Text>
                  </View>
                  <View style={styles.star_ratting}>
                    <Text style={{fontSize: 12}}>Bể bơi trong nhà</Text>
                  </View>
              </View>
              <View style={{flexDirection: 'row', width: WIDTH/1.42, justifyContent: 'space-between'}}>
                  <View style={styles.star_ratting}>
                    <Text style={{fontSize: 12}}>Phòng thể dục</Text>
                  </View>
                  <View style={styles.star_ratting}>
                    <Text style={{fontSize: 12}}>Xông hơi</Text>
                  </View>
                  <View style={styles.star_ratting}>
                    <Text style={{fontSize: 12}}>Spa</Text>
                  </View>
              </View>
              <View style={{flexDirection: 'row', width: WIDTH/1.42, justifyContent: 'space-between'}}>
                  <View style={styles.star_ratting}>
                    <Text style={{fontSize: 12}}>Mát xa</Text>
                  </View>
              </View>
            </View>
          </View>  
        </View>
      </ScrollView>
      <View style={styles.BottomSheet_button}>
          <View style={styles.Select_Button} >
            <Text style={{color: "#fff", fontSize: 16, fontWeight: '400'}}>Áp dụng</Text>
          </View>
      </View>
    </View>
  );

  const sheetRef = React.useRef(null);

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.menu_chose}>
          <View style={styles.menu_chose_first}> 
            <TouchableWithoutFeedback onPress={actioon}>
              <View style={{flexDirection: 'row', alignItems: "center"}}>
                <MaterialCommunityIcons name="sort-descending" size={24} color={Color.primary} />
                <Text style={{fontSize: 14, paddingLeft: 3}}>Sắp xếp</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => sheetRef.current.snapTo(0)}>
              <View style={{flexDirection: 'row', alignItems: "center", marginLeft: 10}}>
                <MaterialCommunityIcons name="sort-descending" size={24} color={Color.primary} />
                <Text style={{fontSize: 14, paddingLeft:3}}>Bộ lọc</Text>
              </View>
            </TouchableWithoutFeedback>
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
        <BottomSheet
              ref={sheetRef}
              snapPoints={[550, 0]}
              borderRadius={40}
              renderContent={renderContent}
              initialSnap={1}
            />
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
    alignItems: "center",
    backgroundColor: '#fff'
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
  },
  BottomSheet_tittle: {
    // width: WIDTH,
    // height: HEIGHT/11.5,
    flex: 0.13,
    backgroundColor: '#fff',
    justifyContent: "space-between",
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: WIDTH - (WIDTH/1.07)
  },
  BottomSheet_price: {
    width: WIDTH,
    height: HEIGHT/5.5,
    backgroundColor: '#fff',
  },
  BottomSheet_star: {
    width: WIDTH,
    height: HEIGHT/4.7,
    backgroundColor: '#fff',
    marginTop: 5
  },
  BottomSheet_rating: {
    width: WIDTH,
    height: HEIGHT/5.5,
    backgroundColor: '#fff',
    marginTop: 5
  },
  BottomSheet_button:{
    width: WIDTH,
    height: HEIGHT/8,
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    
    elevation: 17,
  },
  Select_Button: {
    width: "95%",
    height: 37,
    backgroundColor:'#54d3c2',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: HEIGHT/35
  },
  Bottom_warp: {
    margin:  WIDTH - (WIDTH/1.07)
  },
  star_ratting: {
    flexDirection: 'row',
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5
  },
  BottomSheet_Kieu: {
    width: WIDTH,
    height: HEIGHT/4.7,
    backgroundColor: '#fff',
    marginTop: 5
  },
  BottomSheet_tien_ich: {
    width: WIDTH,
    height: HEIGHT/3,
    backgroundColor: '#fff',
    marginTop: 5
  }
});
