import { StyleSheet, Text, View, Pressable} from 'react-native'
import React from 'react'
import { useState } from 'react'

const Main = () => {
  const [count, setcount]= useState(0);

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:48,margin:40, fontWeight:'bold'}}>count : {count}</Text>

      <View style={{justifyContent:'space-around',alignItems:'center', flexDirection:'row',gap:4}}>
        <Pressable style={{width:140,height:80 ,backgroundColor:'lightblue',justifyContent:'center',alignItems:'center',borderRadius:15}} onPress={() => setcount(count - 1)} ><Text style={{fontSize:24,fontWeight:'bold'}}>Sub</Text></Pressable>
        <Pressable style={{width:100,height:80 ,backgroundColor:'lightblue',justifyContent:'center',alignItems:'center',borderRadius:15}} onPress={() => setcount(0)}><Text style={{fontSize:24,fontWeight:'bold'}}>Reset</Text></Pressable>
        <Pressable style={{width:140,height:80 ,backgroundColor:'lightblue',justifyContent:'center',alignItems:'center',borderRadius:15}} onPress={() => setcount(count + 1)}><Text style={{fontSize:24,fontWeight:'bold'}}>Add</Text></Pressable>
      </View>
      <View>
        <Text >{count === 0 ? "Start counting!": count > 20 ? "Great..." : count > 10 ? "Good :)":"Keep going!!!"}</Text>
        <Text></Text>
      </View>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({})

//onPress={() => {if (count > 0) {setcount(count - 1);} else {setcount(0)}}} if you want counter to prevent negative.