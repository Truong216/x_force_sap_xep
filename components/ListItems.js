import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
function Item({ item }){
  return (
    <>
    <View style={{flexDirection: 'row', alignItems: "center", justifyContent: 'space-between'}}>
      <View style={styles.item}>
        <Feather name={item.icon} style={styles.icon}/>
        <Text style={styles.text}>{item.title}</Text>
      </View>
      <Feather name='chevron-right' style={styles.icon}/>
    </View>
    <View style={styles.divider}></View>
    </>
  )
}

export default function ListItems({ data }) {
  return(
    <View style={styles.listItem}>
      <Text style={styles.option}>{data.option.toUpperCase()}</Text>
      <FlatList
        data={data.type}
        keyExtractor={data.id}
        renderItem={({ item }) => <Item item={item}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
  }, 
  icon: {
    marginRight: 6,
    fontSize: 20,
    color: '#888'
  },
  text: {
    fontSize: 20,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: '#ccc'
  },
  option: {
    fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 6,
  },
  listItem: {
    marginVertical: 6,
  }
})