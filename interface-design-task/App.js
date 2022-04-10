import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Welcome</Text>
      <Text style={styles.txt2}>login here</Text>
      <TextInput style={styles.input} placeholder="   Email"></TextInput>
      <TextInput style={styles.input} placeholder="   Password"></TextInput>
      <TouchableOpacity style={styles.login_btn}><Text style={styles.txt1}>Submit</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
    width:400,
    height:600,
    borderRadius:40,
    alignSelf:"center"
  },
  txt: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'solidblack',
    fontFamily:"sansarif",
    fontStyle:"italic",
  },
  txt1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'solidblack',
    fontFamily:"sansarif",
    fontStyle:"italic",

  },
  txt2: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'solidblack',
    fontFamily:"sansarif",
    fontStyle:"italic",

  },
  input: {
    width: "90%",
    height: "8%",
    backgroundColor: "#e6e8e6",
    borderRadius: 18,
    margin: '5%',
  },
  login_btn: {
    fontSize: 30,
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 20,
    width: '60%',
    textAlign: 'center',
    padding: 6,
    fontWeight: 'bold',
    marginTop: '10%'
  }
});
