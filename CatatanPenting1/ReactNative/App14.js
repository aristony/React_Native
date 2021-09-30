import React, { Component } from 'react'
import { Text, View } from 'react-native'
import firestore from '@react-native-firebase/firestore';
export class App13 extends Component {
constructor(props){
    super(props);
    this.state = {
        data : [],
        dataTampilaN : [],
        search:'',
    }
}
componentDidUpdate(prevProps,prevState){
    this.getDataCollection();
}

search = () =>{
  let data = this.state.data;
  let search = this.state.search;
  data = data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())||item.alamat.toLowerCase().includes(search.toLowerCase())   );
  this.setState({data : data})

}




    render() {
        return (
            <View>
                <Text> textInComponent </Text>
                <TextInput
        style={styles.input}
        onChangeText={(Text) =>this.setState({search:text}, ()=> this.search())}
        value={this.state.search}
        placeholder="Masukan Kata Kunci"
        keyboardType="numeric"
      />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  
export default App13
