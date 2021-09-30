
{/*https://rnfirebase.io/firestore/usage*/}
import React, { Component } from 'react'
import { Text, View , TouchableOpacity} from 'react-native'
import firestore from '@react-native-firebase/firestore';
export class App9 extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    AddData = () =>{
        firestore()
        .collection('Users')
        .add({
          name: 'Ada Lovelace',
          age: 30,
          adress : 'Bali' ,
        })
        .then(() => {
          console.log('User added!');
        });

    }

    setData = () =>{
        firestore()
        .collection('GusNando')
        .doc('ABC')
        .set({
          name: 'Gusnando',
          age: 21,
        })
        .then(() => {
          console.log('User added!');
        });






    }
    render() {
        return (
            <View style = {{flex : 1}}>
                <TouchableOpacity onPress={()=>this.AddData()}><Text>Input Data</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>this.setData()}><Text>Set Data</Text></TouchableOpacity>
           

            </View>
        )
    }
}

export default App9
