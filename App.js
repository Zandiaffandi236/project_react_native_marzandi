import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import Judul from './Components/Judul';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      	<Judul/>
		<Text>				         Tararam 25               </Text>
		<Text>=======================================</Text>
		<Text>=======================================</Text>
        <Text>Nama     = Marzandi Zahran Affandi Leta</Text>
        <Text>Kelas    = XI RPL 2</Text>
        <Text>No.Absen = 25</Text>
		<Image style={{height: 210 , width:210}}
	     source={require('./zandi.jpg')}/>
		
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
