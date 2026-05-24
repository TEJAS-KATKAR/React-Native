import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcon from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialCommunityIc from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

const Categories = () => {
  return (
    <View style={{marginTop: 25, width: '100%',}}>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 30, marginBottom: 16, justifyContent: 'space-between' }}>
          <Text style={{ flex: 1, fontSize: 22, fontWeight: 'bold', color: '#484848' }}>
            Category
          </Text>
          <Text style={{ fontSize: 16, fontWeight: '500', color: '#dd6666' }}>
            See All
          </Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 30, }} >
        <View>
          <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#e8e6e6', borderRadius:200, padding: 16 }} >
            <MaterialCommunityIcons name="tshirt-crew" size={38} color="#c73d3ddd" />
          </View>
          <Text style={{textAlign: 'center', marginTop: 4, fontSize: 13, color: '#484848',fontWeight: '500' }} >Clothes</Text>
        </View>

       <View>
          <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#e8e6e6', borderRadius:100, padding: 16, marginHorizontal:6,}} >
              <MaterialCommunityIcons name="fridge" size={38} color="#c73d3ddd" />
          </View>
          <Text style={{textAlign: 'center', marginTop: 4, fontSize: 13, color: '#484848',fontWeight: '500' }} >Electronics</Text>
       </View>

        <View>
          <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#e8e6e6', borderRadius:200, padding: 16 }} >
            <MaterialCommunityIcons name="shoe-sneaker" size={38} color="#c73d3ddd" />
          </View>
          <Text style={{textAlign: 'center', marginTop: 4, fontSize: 13, color: '#484848',fontWeight: '500' }} >Shoes</Text>
        </View>

        <View>
          <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#e8e6e6', borderRadius:200, padding: 16 }} >
            <Ionicons name="watch" size={38} color="#c73d3ddd" />
          </View>
          <Text style={{textAlign: 'center', marginTop: 4, fontSize: 13, color: '#484848',fontWeight: '500' }} >Watches</Text>
        </View>
        
      </View>

    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})