import { StyleSheet, Text, View, Pressable} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Qualifications = () => {
  const router = useRouter();

  return (
    <View style={{flex:1}}>
    <View style={{flex:1, justifyContent:'center',alignItems:'center',}}>
      <View style={styles.card}>
        <Text style={{fontSize:22, fontWeight:'bold', paddingLeft:30}}>Languages</Text>
        <View style={{flexDirection:'row', flexWrap: 'wrap', justifyContent:'center',alignItems:'center',}}>
          <View style={styles.box}><Text style={{fontSize:16, }}>React Native</Text></View>
          <View style={styles.box}><Text style={{fontSize:16, }}>JavaScript</Text></View>
          <View style={styles.box}><Text style={{fontSize:16, }}>Tailwind Css</Text></View>
          <View style={styles.box}><Text style={{fontSize:16, }}>React JS</Text></View>
          <View style={styles.box}><Text style={{fontSize:16, }}>HTML</Text></View>
          <View style={styles.box}><Text style={{fontSize:16, }}>CSS</Text></View>
        </View>
        <View style={styles.courses}>
        <Text style={{fontSize:22, fontWeight:'bold', marginTop:12, paddingLeft:12}}>Courses</Text>
        <Text style={{fontSize:15, marginTop:6}}>1. Meta Frontend course</Text>
        <Text style={{fontSize:15, marginTop:6}}>2. Meta FullStack course</Text>
        <Text style={{fontSize:15, marginTop:6}}>3. NextWave Ai development course</Text>

        </View>
      </View>
    </View>

    <View style={styles.btncontainer}>
      <Pressable style={styles.btn} onPress={() => router.push('/')}>
      <Text style={{fontSize:20 ,fontWeight:'bold', color:'rgb(123, 76, 76)'}}>Back</Text>
      </Pressable>

      <Pressable style={styles.btn} onPress={() => router.push('/')}>
      <Text style={{fontSize:20 ,fontWeight:'bold', color:'rgb(123, 76, 76)'}}>Home</Text>
      </Pressable>

      <Pressable style={styles.btn} onPress={() => router.push('/about')}>
      <Text style={{fontSize:20 ,fontWeight:'bold', color:'rgb(123, 76, 76)'}}>Next</Text>
      </Pressable>
    </View>
      
    </View>
  )
}

export default Qualifications

const styles = StyleSheet.create({
  card:{
    justifyContent:'center',
    alignItems:'stretch',
    backgroundColor:'rgba(239, 121, 121, 0.3)',
    borderRadius:35,
    paddingVertical:32,
    borderColor:'rgba(243, 146, 43, 0.98)',
    borderWidth:3,
    flexDirection:'column',
    marginHorizontal:14,
  },
  box:{
    width: 150,   // 👈 2 per row
    height: 78,
    backgroundColor: 'rgba(239, 121, 121, 0.47)',
    margin: 5,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
  },
  btn:{
    paddingVertical:10,
    paddingHorizontal:20,
    width:120,
    borderRadius:22,
    height:60,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#ffa550d3',
  },

  btncontainer:{
    flexDirection:'row',
    justifyContent:'space-around',
  },
  courses:{
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: 20, // 👈 IMPORTANT (gives proper left spacing)
    marginTop: 12, 
  }
})