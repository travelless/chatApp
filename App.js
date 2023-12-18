import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image } from 'react-native'
import showImg from './assets/dokidoki.jpeg'
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={showImg} style={styles.showImg}></Image>
      <StatusBar style="auto" />
      <Text>哈哈</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  showImg: {
    width: '100%',
    resizeMode: 'contain'
  }
})
