import * as React from 'react';

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
  OPTIONS 
} from '../constants';

import ListItems from '../components/ListItems';
import { ScrollView } from 'react-native-gesture-handler';

export default function Setting(){
  return(
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.iconWrap}>
          <Feather name='user-x' style={styles.iconUserX}/>
        </View>
        <Text style={styles.title}>Bạn chưa đăng nhập</Text>
        <Text>Bạn cần đăng nhập để sử dụng những </Text>
        <Text>tính năng của Dinogo.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.signin}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
      {
        OPTIONS.map((option, index) => <ListItems data={option} key={index}/>)
      }
      <View style={styles.footer}>
        <Image source={require('../assets/dinogo.png')} style={styles.image}/>
        <Text style={styles.textFooter}>2020 Dinogo</Text>
        <Text style={styles.textFooter}>Dinogo version 1.9.5(1.0)</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: PADDING,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  iconWrap: {
    marginVertical: 8,
    position: "relative",
  },
  iconUserX: {
    fontSize: 60,
    color: '#e97171',
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  button: {
    backgroundColor: '#E62E5E',
    paddingVertical: 6,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginVertical: 8,
  },
  signin: {
    color: "#fff",
  },
  footer: {
    marginVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 40, 
    height: 40, 
  },
  textFooter: {
    color: '#888'
  }
})