import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Hero = () => {
  return (
    <View >
      
        <View style={{marginTop: 30, flexDirection: 'row', alignItems: 'center', marginHorizontal: 30,}} >
            <View style={{ alignItems: 'center', width: '70%'}} >
                <Text style={{fontSize: 24, fontWeight: 'bold',alignSelf: 'flex-start', color: '#7e7e7e',}} >#SpecialForYou</Text>
            </View>
            <View style={{alignItems: 'center', width: '30%',}} >
                <Text style={{fontSize: 18, fontWeight: '500',alignSelf: 'flex-end', color: '#dd6666b9', }} >See All</Text>
            </View>
        </View>

        <View>
            
        </View>

    </View>
  )
}

export default Hero

const styles = StyleSheet.create({})