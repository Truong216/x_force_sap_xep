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

export default function LoginScreen(){

  const [showPassWord, setShowPassWord] = useState(true);

  return(
    <View style={styles.container}>
      <View style={{alignItems: "center", marginTop: 16, }}> 
        <Image source={require('../assets/dinogo.png')} style={{width: 80, height: 80}}/>
        <Text style={{fontSize: 40, color: COLOR}}>Donigo</Text>
      </View>
      <View>
        <View style={{flexDirection: "row", alignItems: "center"}}> 
          <Feather name='phone' style={{marginHorizontal: 14}} size={22} color="#888"/>
          <TextInput 
            style={styles.textInput}
            placeholder='Số điện thoại'
            keyboardType='number-pad'
          />
        </View>
        <View style={styles.divider}></View>
        <View style={{flexDirection: "row", alignItems: "center", marginTop: 12,}}> 
          <Feather name='lock' style={{marginHorizontal: 14, flex: 0}} size={22} color="#888"/>
          <TextInput 
            style={styles.textInput}
            placeholder='Mật khẩu'
            keyboardType='default'
            secureTextEntry={showPassWord}
          />
          <TouchableOpacity
            onPress={() => {
              setShowPassWord(!showPassWord);
            }}
            style={{flex: 0, marginRight: 8,}}
          >
            {
              showPassWord ? <Feather name='eye'/> : <Feather name='eye-off'/> 
            }
          </TouchableOpacity>
        </View>
        <View style={styles.divider}></View>
        <TouchableOpacity>
          <Text style={{color: "#ffa36c", fontWeight: "bold", textAlign: "right", marginVertical: 24, fontSize: 16}}>Quên mật khẩu?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: COLOR, padding: 4, borderRadius: 6,}}>
            <Image source={require('../assets/dinogo.png')} style={{width: 30, height: 30, resizeMode: "cover"}}/>
            <Text style={{textTransform: "uppercase", color: "#fff"}}>đăng nhập</Text>
          </View>
        </TouchableOpacity>
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
      <TouchableOpacity>
        <View style={styles.footer}>
          <Text style={{textTransform: "uppercase", color: COLOR}}>
            Tạo tài khoản
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: PADDING,
    width: WIDTH_DEVICE,
    height: HEIGHT_DEVICE,
    justifyContent: "space-between"
  },
  divider: {
    marginTop: 8,
    width: "100%",
    height: 1,
    backgroundColor: "#888",
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
  footer: {
    borderRadius: 8,
    borderColor: COLOR,
    borderWidth: 1,
    borderStyle: "solid",
    width: "100%",
    alignItems: "center",
    paddingVertical: 6,
    marginBottom: 20,
  } 
})