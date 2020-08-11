import React, { useState } from 'react';

import Feather from 'react-native-vector-icons/Feather';

import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import { 
  PADDING,
  WIDTH_DEVICE,
  HEIGHT_DEVICE,
  COLOR
} from '../constants';
import { TextInput } from 'react-native-gesture-handler';

export default function SignInScreen() {
  return(
    <View style={styles.container}>
      <View style={{flex: 7}}>
        <Text style={{textAlign: "center", fontSize: 26, fontWeight: "bold", marginVertical: 16}}>
          Đăng ký
        </Text>
        <View style={{alignItems: "center", marginVertical: 12,}}>
          <Text style={{color: "#888"}}>
            Vui lòng nhập số điện thoại vào ô bên dưới.
          </Text> 
          <Text style={{flexWrap: "wrap", textAlign: "center", color: "#888"}}>
            Chúng tôi sẽ gửi mã OTP tới số điện thoại của bạn để kích hoạt
          </Text>
        </View>
        <View style={{marginBottom: 30,}}>
          <View style={{flexDirection: "row", alignItems: "center",}}> 
            <Feather name='phone' style={{marginHorizontal: 14}} size={22} color="#888"/>
            <TextInput 
              style={styles.textInput}
              placeholder='Số điện thoại'
              keyboardType='number-pad'
            />
          </View>
          <View style={styles.divider}></View>
        </View>
        <TouchableOpacity>
          <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: COLOR, padding: 4, borderRadius: 6,}}>
            <Image source={require('../assets/dinogo.png')} style={{width: 30, height: 30, resizeMode: "cover"}}/>
            <Text style={{textTransform: "uppercase", color: "#fff", marginLeft: 8,}}>Tiếp tục</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flex :3}}>
        <View style={{marginTop: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", overflow: "hidden"}}>
          <View style={{backgroundColor: "#888", width: 500, height: 1}}></View>
          <Text style={{textAlign: "center", marginHorizontal: 8, color: "#888"}}>hoặc là</Text>
          <View style={{backgroundColor: "#888", width: 500, height: 1}}></View>
        </View>
        <View style={styles.social}>
          <TouchableOpacity>
            <View style={styles.wrapApple}>
              <Image source={require('../assets/apple.png')} style={{width: 28, height: 28, resizeMode: "cover"}}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.wrapFacebook}>
              <Image source={require('../assets/facebook.png')} style={{width: 28, height: 28, resizeMode: "cover"}}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.wrapGoogle}>
              <Image source={require('../assets/google.png')} style={{width: 28, height: 28, resizeMode: "cover"}}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: PADDING,
    width: WIDTH_DEVICE,
    height: HEIGHT_DEVICE,
  }, 
  divider: {
    marginTop: 8,
    width: "100%",
    height: 1,
    backgroundColor: "#999",
  },
  textInput: {
    fontSize: 16,
    flex: 1,
  },
  social: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  wrapApple: {
    width: 50,
    height: 50,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  wrapFacebook: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderColor: "blue",
    borderWidth: 1,
    borderStyle: "solid",
    marginHorizontal: 16
  },
  wrapGoogle: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderColor: "red",
    borderWidth: 1,
    borderStyle: "solid"
  }, 
})