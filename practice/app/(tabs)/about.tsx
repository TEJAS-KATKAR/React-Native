import { StyleSheet, Text, View, Pressable} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const About = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>

  {/* CENTERED CARD */}
  <View style={styles.centerArea}>
    <View style={styles.card}>
      <Text style={styles.title}>About Me</Text>

      <View style={styles.aboutSection}>
        <Text style={styles.aboutText}>
          I am an IT student passionate about building real-world applications and improving my development skills.
        </Text>

        <Text style={styles.aboutText}>
          Currently learning React Native and front-end development, with a focus on creating clean and user-friendly interfaces.
        </Text>

        <Text style={styles.aboutText}>
          I enjoy turning ideas into practical projects and continuously improving through hands-on practice.
        </Text>
      </View>
    </View>
  </View>

  {/* BUTTONS */}
  <View style={styles.btncontainer}>
    <Pressable style={styles.btn} onPress={() => router.push('/qualifications')}>
      <Text style={styles.btnText}>Back</Text>
    </Pressable>

    <Pressable style={styles.btn} onPress={() => router.push('/')}>
      <Text style={styles.btnText}>Home</Text>
    </Pressable>

    <Pressable style={styles.btn} onPress={() => router.push('/')}>
      <Text style={styles.btnText}>Next</Text>
    </Pressable>
  </View>

</View>
  )
}

export default About

const styles = StyleSheet.create({
  centerArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(123, 76, 76)',
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
title: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 12,
  textAlign: 'center',
},

aboutSection: {
  width: '100%',
  paddingHorizontal: 20,
},

aboutText: {
  fontSize: 16,
  marginBottom: 8,
  lineHeight: 22,
},
})