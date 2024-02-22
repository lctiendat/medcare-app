import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function WelcomeScreen({ navigation }: any) {

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../assets/images/app/logo.png')} style={{ width: 200, height: '100%', resizeMode: 'contain' }} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.welcomeText}>Welcome to Medcare</Text>
        <Text style={styles.descText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum veritatis adipisci perspiciatis molestiae. Rerum beatae minima autem tenetur ut facere laboriosam! Earum non dolor officiis libero amet quaerat rem.</Text>
        <View style={styles.wrapperButton} >
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    flex: 4,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 3,
    color: 'red',
    width: '100%'
  },
  welcomeText: {
    fontSize: 30,
    color: 'darkblue',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  descText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'gray',
    marginHorizontal: 20
  },
  wrapperButton: {
    flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 50
  },
  button: {
    color: 'white',
    backgroundColor: 'darkblue',
    height: 55,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
});
