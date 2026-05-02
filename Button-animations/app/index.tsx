import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Button = () => {

  const [glow, setglow] = useState(false);

  return (
    <View style={{flex:1,justifyContent:"flex-start",alignItems:"center",paddingTop:50,}}>
      <Pressable
          onPressIn={() => {setglow(true)}} 
          onPressOut={() => {setglow(false)}} 
          style={{paddingHorizontal:50,paddingVertical:20,backgroundColor: glow? "#0050f0" : "#0254fada", borderRadius:10 ,
                    justifyContent:"flex-start",alignItems:"center",
                        transform:[{scale: glow? 0.95 : 1}],
                }}>

        <Text style={{fontSize:24, color:'white'}}>Click Me</Text>
      </Pressable>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({})